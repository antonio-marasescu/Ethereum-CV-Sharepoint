pragma solidity >=0.5.0 <0.6.0;
pragma experimental ABIEncoderV2;

contract CvSharepoint {
  event CvAdded(uint cvId);

  struct CvModel {
    uint id;
    string ipfsAddress;
    address owner;
  }

  string[] public ipfsCvAddresses;
  mapping(string => address) public cvToOwner;

  modifier notUsed(string memory _ipfsAddress) {
    require(cvToOwner[_ipfsAddress] == address(0));
    _;
  }

  function addCv(string memory _ipfsAddress) public notUsed(_ipfsAddress) {
    uint id = ipfsCvAddresses.push(_ipfsAddress) - 1;
    cvToOwner[_ipfsAddress] = msg.sender;
    emit CvAdded(id);
  }

  function getCvById(uint id) external view returns (CvModel memory) {
    return CvModel(id, ipfsCvAddresses[id], cvToOwner[ipfsCvAddresses[id]]);
  }

  function getCvModelList() external view returns (CvModel[] memory) {
    CvModel[] memory models = new CvModel[](ipfsCvAddresses.length);
    for (uint i = 0; i < ipfsCvAddresses.length; i++) {
      models[i].id = i;
      models[i].ipfsAddress = ipfsCvAddresses[i];
      models[i].owner = cvToOwner[ipfsCvAddresses[i]];
    }
    return models;
  }
}
