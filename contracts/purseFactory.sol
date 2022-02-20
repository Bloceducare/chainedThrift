// SPDX-License-Identifier: MIT
pragma solidity 0.8.1;
import './purse.sol';




contract PurseFactory{
    
    event PurseCreated(address _creator, uint256 starting_amount, uint256 max_members, uint256 _time_created);
    
    address _address_of_token; //address of acceptable erc20 token - basically a stable coin--DAI rinkeby
    IERC20 tokenInstance = IERC20(_address_of_token);
    
     //0xf0169620C98c21341aBaAeaFB16c69629Dafc06b    
    uint256 public purse_count;
    address[] _list_of_purses;//this array contains addresss of each purse
    mapping(address=> uint256) id_to_purse;
    mapping(address => uint256) public purseToChatId;


    constructor(address _tokenAddress){
        _address_of_token = _tokenAddress;
    }
    
    
    /** @notice a user can create a purse calling this function- only collaterals are actually deposited
    we use the contribution amount with max_user to calculate the required collateral deposit- every other
    user joining the purse hence forth will be required to deposit same
     */
    function createPurse(uint256 contribution_amount, uint256 _collateral, uint256 _max_member, uint256 time_interval, uint256 chatId)public {
         
        PurseContract purse = new PurseContract(msg.sender, contribution_amount, _collateral, _max_member, time_interval);
        //purse factory contract should be approved
        require(tokenInstance.transferFrom(msg.sender, address(purse), (_collateral)), 'transfer to token factory not successful');
        _list_of_purses.push(address(purse));
        purse_count = purse_count++;
        id_to_purse[address(purse)] = purse_count;
        purseToChatId[address(purse)] = chatId;
        
        emit PurseCreated(msg.sender, contribution_amount, _max_member, block.timestamp);
    }
    
    function allPurse()public view returns(address[]memory){
        return _list_of_purses;
    }
    
    
    
    
    
}