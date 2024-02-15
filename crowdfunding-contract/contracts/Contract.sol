// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
contract CrowdFunding {
    address payable public platformOwner ;
    uint256 public platformFee; // in percent

    struct CrowdFundingEvent {
        address creator;
        string title;
        string bannerURL;
        string description;
        bool status;
        uint256 targetAmount;
        uint256 collectedAmount;
        address[] donators;
        uint256[] donations;
        uint256 deadline; //  here using days

    }

    // collection of ell events
    CrowdFundingEvent[]  allEvents;

    //this will help to retrieve spacific event info, its to index the events to mapping
    uint256 public eventCount; 
    mapping(uint256=>CrowdFundingEvent) public  events;


    event NewEvent(string title, string description, uint256 targetAmount, address creator);
    event Donate( uint256 amount, address donator, uint256 eventId, string title);
    event Withdraw( uint256 amount, address eventCreator, uint256 eventId, string title);
    event ChangeEventStatus(string message);
    event NewPlatformFee( string message);


    constructor(){
        platformOwner = payable(msg.sender);
        platformFee=2;
    }

    modifier onlyEventCreator(uint256 eventId ){
        require(events[eventId].creator==msg.sender,"Oops you are not authorized");
        _;
    }
    modifier onlyOwner (){
        require(msg.sender==platformOwner, "You are not authorized");
        _;
    }


    // create an event
    function createEvent( string memory _title,  string memory _description, string memory _bannerURL, uint256 _targetAmount, uint256 _deadline) public  {
        require((_deadline *1 days) + block.timestamp >block.timestamp,"Deadline should be  a future date.");

        CrowdFundingEvent memory eventInformation ;

        eventInformation.creator=msg.sender;
        eventInformation.title=_title;
        eventInformation.bannerURL=_bannerURL;
        eventInformation.description=_description;
        eventInformation.targetAmount=_targetAmount * 1 ether;
        eventInformation.status=false;
        eventInformation.deadline=block.timestamp + (_deadline * 1 days);
     


        events[eventCount]=eventInformation;

        // event info needs to be pushed to allEvents array
        allEvents.push(eventInformation);
        eventCount++;

        emit NewEvent(_title, _description, _targetAmount, msg.sender);

    }

     //eventId will be the index retrieved from allEvents
    function sendFundToEvent(uint256 eventId) public payable {

        CrowdFundingEvent storage targetEvent = events[eventId] ;
        require(targetEvent.status, "Event is not live at the moment");
        require(targetEvent.targetAmount>targetEvent.collectedAmount, "Target Amount Reached");
        require(targetEvent.deadline>block.timestamp, "Deadline exceeds!");
        

        targetEvent.collectedAmount +=msg.value;
        targetEvent.donators.push(msg.sender);
        targetEvent.donations.push(msg.value);

        // now  update the event in allEvents array
        allEvents[eventId]=targetEvent;

        emit Donate(msg.value, msg.sender, eventId, targetEvent.title);

    }

    function withdrawRaisedFund(uint256 eventId)public  onlyEventCreator(eventId)  {
        CrowdFundingEvent storage targetEvent = events[eventId];

        require(targetEvent.collectedAmount>0, "No Balance to withdraw");

        uint256 fee = (targetEvent.collectedAmount *platformFee)/100;
        uint256 balanceAvailableToWithdraw = (targetEvent.collectedAmount) - (targetEvent.collectedAmount *platformFee)/100 ;

        (bool sent ,) = payable(targetEvent.creator).call{value:balanceAvailableToWithdraw}("");

        require(sent, "Withdrawal failed. Try later");
        platformOwner.transfer(fee);


        emit Withdraw(balanceAvailableToWithdraw, targetEvent.creator, eventId, targetEvent.title);

    }

     // event creator can only set status to false
    function changeEventStatus(uint256 eventId) public onlyEventCreator(eventId){
        CrowdFundingEvent storage targetEvent = events[eventId] ;
        require(targetEvent.status, "Event is not live");
        targetEvent.status=false;

        emit ChangeEventStatus("Event status changed");

    }

    // platform owner can change status  to true /false
    function controlEventStatus(uint256 eventId) public onlyOwner(){
        CrowdFundingEvent storage targetEvent = events[eventId] ;
        targetEvent.status=!targetEvent.status;

        emit ChangeEventStatus("Event status changed");

    }


    // retrieve allEvents 
    function getAllEvents()public view returns(CrowdFundingEvent[] memory ){
        return allEvents;
    }

    // get contract balance
    function getBalance() public view returns(uint256) {
        return address(this).balance;
    }


    // receive() external payable{} 

    function setPlatformFee(uint256 _platformFee) public onlyOwner() {
        platformFee = _platformFee;
        emit NewPlatformFee("New platform fee is set by owner");

    }
}