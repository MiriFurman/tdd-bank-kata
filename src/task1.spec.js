/**
 * Created by mirif on 31/07/2017.
 */
import {expect} from 'chai';
import sinon from 'sinon';


describe('Split', () => {
  function splitString(stringToSplit, separator, limit) {
    return stringToSplit.split(separator, limit);
  }
  it('should return an array from string separated by space', () => {
    const string = 'Hello World';
    const arrayToMatch = ['Hello', 'World'];
    const arrAfterSplit = splitString(string, ' ');
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
  it('should return an array from string separated by comma', () => {
    const string = 'Hello,World';
    const arrayToMatch = ['Hello', 'World'];
    const arrAfterSplit = splitString(string, ',');
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
  it('should return an array with one cell containing the string when separator is not defined', () => {
    const string = 'Hello World';
    const arrayToMatch = ['Hello World'];
    const arrAfterSplit = splitString(string);
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
  it('should return an array with one cell containing the string when separator is not in the string', () => {
    const string = 'Hello World';
    const arrayToMatch = ['Hello World'];
    const arrAfterSplit = splitString(string, ',');
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
  it('should return an array from string separated by space with limit of 2', () => {
    const string = 'Hello World. How are you doing?';
    const arrayToMatch = ['Hello', 'World.'];
    const arrAfterSplit = splitString(string, ' ', 2);
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
  it('should return an empty array from empty string', () => {
    const string = '';
    const arrayToMatch = [''];
    const arrAfterSplit = splitString(string, ',');
    expect(arrAfterSplit).to.deep.equal(arrayToMatch);
  });
});



