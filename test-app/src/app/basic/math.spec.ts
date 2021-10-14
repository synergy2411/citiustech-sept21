import { addition } from './math';

// Test suite
describe("math.ts", () => {
  // test spec
  xit("Should test addition function", ()=>{
    expect(addition(4,6)).toEqual(10)
  })

  it("Should test toBe (==) matcher", () => {
    let message = "Hello Angular!";
    expect(message).toBe("Hello Angular!");
  })

  it("Should test array using toEqual", () => {
    let fruits = ["apple", "banana", 'orange']
    expect(fruits).toEqual(["apple", "banana", 'orange'])
  })

  it("Should test toContain", () => {
    let message = "Welcome to the world of Angular Testing";
    expect(message).toContain('Angular');
  })

  it("Should test toMatch", () => {
    let message = "Welcome to the world of Angular version 11 Testing";
    // expect(message).toMatch(/Angular/)
    expect(message).toMatch(/\d+/)
  })

  it('Should test toContain for Array', () => {
    let fruits = ["apple", "banana", 'orange'];
    expect(fruits).toContain('apple')
  })

})
