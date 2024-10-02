export const  deliveryOption = [
    {
        id:'1',
        deliveryDays: 7,
        price: 0
    },
    {
        id:'2',
        deliveryDays: 3,
        price: 499
    },
    {
        id:'3',
        deliveryDays: 1,
        price: 999
    },

];

export function getDeliveryOptionId(deliveryOptionId){
    let deliveryDate;

    deliveryOption.forEach(option => {
        if ( option.id ===  deliveryOptionId){
          deliveryDate = option;
  
        }
    });
    return deliveryDate || deliveryOption[0];  

}
  

