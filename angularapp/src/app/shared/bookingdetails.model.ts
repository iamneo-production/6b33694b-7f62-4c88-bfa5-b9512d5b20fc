// This  provide model for the booking details form 
export interface BookingDetails {
    bookingId: number,
    eventName: string,
    applicantName: string,
    applicantAddress: string,
    applicantMobileNo: string,
    applicantEmail: string,
    eventAddress: string,
    eventTime: string,
    eventFromDate: Date,
    noOfPeople: number

}
