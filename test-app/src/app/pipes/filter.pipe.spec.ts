import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {

  let pipe : FilterPipe;

  beforeEach(() => {
    pipe = new FilterPipe()
  })

  afterEach(() => {
    pipe = null;
  })

  it("Should return complete todo list", () =>{
    const todoCollection = [
      {label : "to pot the plant", status : "done"},
      {label : "to buy the jeans", status : "pending"},
      {label : "to spile the milk", status : "pending"},
      {label : "to renew car insurance", status : "done"},
    ]
    expect(pipe.transform(todoCollection)).toEqual(todoCollection)
  })

  it("Should return filtered todo Collection", () => {
    const todoCollection = [
      {label : "to pot the plant", status : "done"},
      {label : "to buy the jeans", status : "pending"},
      {label : "to spile the milk", status : "pending"},
      {label : "to renew car insurance", status : "done"},
    ]
    const expectedResult = [
      {label : "to buy the jeans", status : "pending"},
      {label : "to spile the milk", status : "pending"}
    ]

    expect(pipe.transform(todoCollection, "pending")).toEqual(expectedResult)

  })
  it('create an instance', () => {

    expect(pipe).toBeTruthy();
  });
});
