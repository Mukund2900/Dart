pragma solidity >=0.4.16 <0.9.0;

contract dartContract {
   
    struct dProductStruct{
       
        uint number ;
        string nameProduct;
        string geoCoordinates;
        string timeStamp;
        string qrCodeDetails;
    }
    string private buyer  ;
    mapping(address => bool) public pvt;
    mapping(uint => dProductStruct) public dartProduct;
    address public adpoint ;
    uint public productCount;


    function addProduct (string memory _nameProduct , string memory _geoCoordinates , string memory _timeStamp , string memory _qrCodeDetails ) public {
        productCount ++;
        dartProduct[productCount] = dProductStruct(productCount, _nameProduct, _geoCoordinates , _timeStamp , _qrCodeDetails );
    }


    }


