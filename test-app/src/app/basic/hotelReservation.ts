export class HotelReservation{
  numberOFCustomer = 10;

  registerCustomer(){
    ++this.numberOFCustomer;
  }

  unregisterCustomer(){
    this.numberOFCustomer--;
  }
}
