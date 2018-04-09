pragma solidity ^0.4.0;
contract PariMatch {
    address owner;
    address public first;
    address public second;
    mapping(address => uint) public bids;
    event Bid(address addr, uint val);
    function PariMatch(address f, address s) public{
        owner = msg.sender;
        first = f;
        second = s;
    }
    function bid() public payable{
        require(msg.sender==first||msg.sender==second);
        require(msg.value>=1000000000000000000);
        bids[msg.sender] += msg.value;
        emit Bid(msg.sender, msg.value);
    }
    function withdraw(uint whoWins) public {
        require(msg.sender==owner);
        if(whoWins==1){
            first.transfer(bids[second] + bids[first]);
        }else{
            if(whoWins==2){
                second.transfer(bids[first]+bids[second]);
            }else{
                first.transfer(bids[first]);
                second.transfer(bids[second]);
            }
        }
        bids[first]=0;
        bids[second]=0;
    }
}