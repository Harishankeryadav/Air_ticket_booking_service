const {StatusCodes} = require('http-status-codes');

const{Booking} = require('../models/index');
const{AppError, ValidationError}= require('../utiles/errors/index');

class BookingRepository{
    async create(data){
        try {
            const booking = await Booking.create(data);
            return booking;
        } catch (error) {
            if(error.name = 'sequelizeValidationError'){
                throw new ValidationError(error);
            }
            throw new AppError('RepositoryError',
            'Cannot create Booking',
            'there was some issue try later',
            statusCodes.INTERNAL_SERVER_ERROR);
        }
    }
    async update(data){
        
    }

}

module.exports = BookingRepository;