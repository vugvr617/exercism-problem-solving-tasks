/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
 export function getFirstCard(deck) {
    let [num1] = deck;
    return num1;
  } 
  
  /**
   * Get the second card in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card} the second card in the deck
   */
  export function getSecondCard(deck) {
    let [,num2] = deck;
    return num2;
  }
  
  /**
   * Switch the position of the first two cards in the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck with reordered cards
   */
  export function swapTopTwoCards(deck) {
    let num1 = getFirstCard(deck);
    let num2 = getSecondCard(deck);
    deck = [num2,num1, ...deck.slice(2,deck.length)];
    return deck;
  }
  
  /**
   * Put the top card of the given deck into a separate discard pile
   *
   * @param {Card[]} deck
   *
   * @returns {[Card, Card[]]} the top card of the given
   * deck and a new deck containing all the other cards
   */
  export function discardTopCard(deck) {
    let [topCard] = deck;
    deck = deck.slice(1,deck.length);
    let resultArray = [topCard, deck];
    return resultArray;
  }
  
  /** @type Card[] **/
  const FACE_CARDS = ['jack', 'queen', 'king'];
  
  /**
   * Insert face cards into the given deck
   *
   * @param {Card[]} deck
   *
   * @returns {Card[]} new deck where the second,
   * third, and fourth cards are the face cards
   */
  export function insertFaceCards(deck) {
    let remainArray = [...deck.slice(1,deck.length)];
    let [firstNum] = deck;
    let resultArray = [firstNum, ...FACE_CARDS, ...remainArray];
    return resultArray;
  }
  