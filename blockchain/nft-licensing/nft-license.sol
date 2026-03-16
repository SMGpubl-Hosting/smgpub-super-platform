// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract SMGPUB_Licensing {
    struct License {
        uint256 trackId;
        address creator;
        address licensee;
        string licenseType; // e.g., "Exclusive", "Lease"
        string ipfsMetadata; // Link to the signed PDF contract
        uint256 price;
    }

    mapping(uint256 => License) public activeLicenses;
    uint256 public licenseCount;

    event LicenseIssued(uint256 indexed licenseId, address indexed creator, address indexed buyer);

    // Purchase a license and distribute funds instantly
    function purchaseLicense(
        uint256 _trackId, 
        address payable _creator, 
        string memory _type, 
        string memory _ipfs
    ) public payable {
        require(msg.value >= 0.01 ether, "Insufficient payment");
        
        licenseCount++;
        activeLicenses[licenseCount] = License({
            trackId: _trackId,
            creator: _creator,
            licensee: msg.sender,
            licenseType: _type,
            ipfsMetadata: _ipfs,
            price: msg.value
        });

        // Instant Royalty Distribution
        _creator.transfer(msg.value);

        emit LicenseIssued(licenseCount, _creator, msg.sender);
    }
}
