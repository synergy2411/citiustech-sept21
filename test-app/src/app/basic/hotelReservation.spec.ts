import { HotelReservation } from './hotelReservation';

// AAA Pattern - Arrange - Act - Assert

describe("Hotel Reservation", () => {

  // let customer = new HotelReservation();
  let customer;

  beforeEach(() => {
    // Arrange
    customer = new HotelReservation();
  })

  afterEach(() => {
    customer = null;
  })

  it("Should test customer registration", () => {
    // Act
    customer.registerCustomer();
    // Assert
    expect(customer.numberOFCustomer).toBe(11)
  })

  it("Should unregister the customer", () => {
    // let cust = new HotelReservation();
    customer.unregisterCustomer();
    expect(customer.numberOFCustomer).toBe(9)
  })
})
