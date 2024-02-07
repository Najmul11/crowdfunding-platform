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
        uint32 targetAmount;
        uint256 collectedAmount;
        address[] donators;

    }

    // collection of ell events
    CrowdFundingEvent[]  allEvents;
    // to retrive specific event information
    uint256 public eventCount; //this will help to retrieve spacific event info, its to index the events to mapping
    mapping(uint256=>CrowdFundingEvent) public  events;


    constructor(){
        platformOwner = payable(msg.sender);
    }

    modifier onlyEventCreator(uint256 eventId ){
        require(events[eventId].creator==msg.sender,"Oops you are not authrized");
        _;
    }
    modifier onlyOwner {
        require(msg.sender==platformOwner);
        _;
    }


    // create an event
    function createEvent( string memory _title,  string memory _description, string memory _bannerURL, uint32 _targetAmount) public  {
        // storing the event info to mapping
        CrowdFundingEvent memory eventInformation ;

        eventInformation.creator=msg.sender;
        eventInformation.title=_title;
        eventInformation.bannerURL=_bannerURL;
        eventInformation.description=_description;
        eventInformation.targetAmount=_targetAmount;
        eventInformation.status=true;
     


        events[eventCount]=eventInformation;

        // event info needs to be pushed to allEvents array
        allEvents.push(eventInformation);
        eventCount++;

    }


    function sendFundToEvent(uint256 eventId) public payable {//eventId will be the index retrieved from allEvents

        CrowdFundingEvent storage targetEvent = events[eventId] ;
        require(targetEvent.status, "Not accepting anymore donation.");

        targetEvent.collectedAmount=msg.value;
        targetEvent.donators.push(msg.sender);

        // now  update the event in allEvents array
        allEvents[eventId]=targetEvent;

    }

    function withdrawRaisedFund(uint256 eventId)public  onlyEventCreator(eventId)  {
        CrowdFundingEvent memory targetEvent = events[eventId];

        uint256 fee = (targetEvent.collectedAmount *platformFee)/100;
        uint256 balanceAvailableToWithdraw = (targetEvent.collectedAmount) - (targetEvent.collectedAmount *platformFee)/100 ;

        (bool sent ,) = payable(targetEvent.creator).call{value:balanceAvailableToWithdraw}("");

        require(sent, "Withdrawal failed. Try later");
        platformOwner.transfer(fee);

    }

    // retrieve allEvents 
    function getAllEvents()public view returns(CrowdFundingEvent[] memory ){
        return allEvents;
    }


    // function to catch ether directly sent to the CA
    receive() external payable{} // we need to store what amount is sent to the CA . this is not needed. A way to get some money for the platform owner mistakenly sent to the contract address directly. owner can take all / or have functionality to return amount if anyone claim for that amount
}





// --------------- thing to implement------------
/** 
1 reqiure statments to functions
2 set deadline  for events
3 user can create event , status of the event will be false
    1 when status false , cant send fund to that event 
    2 after event creation, platform owner will approve the events  changing status to true

4. need to put condition in withdrawing
    1 status needs to be fasle to withdraw 
    2 must have balance

5. platform owner and eventcreator will have ability to conclude an event before reaching target or deadline making status false
    platform owner can set status true /false both,event creator can only set to false

6 events 
7 fn to set platformFee (platfom owner)

 */