import garage from "../pages/Garage";

const GarageSteps = {

  addCar(brand, model, mileage) {
    garage.gerAddCarBtn().clickElementForce()
    garage.gerAddCarBrandBtn().select(brand)
    garage.gerAddCarModelBtn().select(model)
    garage.gerAddCarMileageBtn().enterValue(mileage)
    garage.getSaveCarAddBtn().clickElement()
  },

  deleteCar() {
    garage.getEditCarBtn().clickElement()
    garage.getRemoveCarBtn().clickElement()
    garage.getDeleteCarBtn().clickElement()
  },

  goToGarage() {
    garage.getGarageBtn().clickElement()
  },

  enterMileageField (value) {
    if(value){
      garage.gerAddCarMileageBtn().enterValue(value)
    } else 
    garage.gerAddCarMileageBtn().clickElement()
    garage.gerAddCarMileageBtn().removeFocus()
  },

  errorMileageFieldisVisible(value) {
    garage.getErrorMileage().isVisible()
    garage.getErrorMileage().chekingText(value)
  }
}

export default GarageSteps
