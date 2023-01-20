const { ethers } = require("hardhat");
const { assert, expect } = require("chai");


describe('Simple Storage Deploy Test ', async () => {
  let simpleStorageFactory;
  let simpleStorage;
  beforeEach('Deploy Smart Contract', async () => {
    simpleStorageFactory = await ethers.getContractFactory('SimpleStorage');
    simpleStorage = await simpleStorageFactory.deploy();
  });

  it('favrioute Number Start with 0', async () => {
    const initialValue = await simpleStorage.retrieve();
    const expectedValue = "0";
    assert.equal(initialValue.toString(), expectedValue);
  })
})