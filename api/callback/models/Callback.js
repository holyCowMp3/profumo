'use strict';

/**
 * Lifecycle callbacks for the `Callback` model.
 */
const NovaPoshta = require('novaposhta_3');
module.exports = {
  // Before saving a value.
  // Fired before an `insert` or `update` query.
  // beforeSave: async (model) => {},

  // After saving a value.
  // Fired after an `insert` or `update` query.
  afterSave: async (model, result) => {
    let liqPayConf = require('../../liqpayConf.json');
    let novaPoshta = new NovaPoshta({apiKey: liqPayConf.nova_poshta});
    let profumoCounterparty = '4187cb04-cd83-11e9-9937-005056881c6b';
    Order.find({"_id":result.order_id}).then( order => {
      // novaPoshta.counterparty.saveCounterparty({
      //   FirstName: order.deliveryInfo.name,
      //   MiddleName: order.deliveryInfo.surname,
      //   LastName: order.deliveryInfo.thirdname,
      //   Phone: order.deliveryInfo.phone,
      //   Email: '',
      //   CounterpartyType: 'PrivatePerson',
      //   CounterpartyProperty: 'Recipient'
      // }).then(counterparty => {
      //   if (counterparty.success) {
      //     let counterpartyId = counterparty.data.Ref;
      //
      //   }
      // });
      console.log(order);
      // novaPoshta.document.saveInternetDocument(
      //   {
      //     NewAddress: '1',
      //     PayerType: 'Sender',
      //     PaymentMethod: 'Cash',
      //     CargoType: 'Cargo',
      //     VolumeGeneral: '0.1',
      //     Weight: '10',
      //     ServiceType: 'WarehouseWarehouse',
      //     SeatsAmount: '1',
      //     Description: 'Косметичні засоби',
      //     Cost: '2000',
      //     CitySender: '8d5a980d-391c-11dd-90d9-001a92567626',
      //     Sender: profumoCounterparty,
      //     SenderAddress: 'd492290b-55f2-11e5-ad08-005056801333',
      //     ContactSender: profumoCounterparty,
      //     SendersPhone: '380950831150',
      //     RecipientCityName: order.deliveryInfo.cityName,
      //     RecipientArea: '',
      //     RecipientAreaRegions: '',
      //     RecipientAddressName: order.deliveryInfo.postOfficeName,
      //     RecipientHouse: '',
      //     RecipientFlat: '',
      //     RecipientName: order.deliveryInfo.name +' '+ order.deliveryInfo.surname,
      //     RecipientType: 'PrivatePerson',
      //     RecipientsPhone: order.deliveryInfo.phone,
      //     DateTime: new Date().toLocaleDateString('en-GB', {
      //       day : 'numeric',
      //       month : 'numeric',
      //       year : 'numeric'
      //     }).split('/').join('.')
      //   }
      // );

    });

  },

  // Before fetching all values.
  // Fired before a `fetchAll` operation.
  // beforeFetchAll: async (model) => {},

  // After fetching all values.
  // Fired after a `fetchAll` operation.
  // afterFetchAll: async (model, results) => {},

  // Fired before a `fetch` operation.
  // beforeFetch: async (model) => {},

  // After fetching a value.
  // Fired after a `fetch` operation.
  // afterFetch: async (model, result) => {},

  // Before creating a value.
  // Fired before an `insert` query.
  // beforeCreate: async (model) => {},

  // After creating a value.
  // Fired after an `insert` query.
  // afterCreate: async (model, result) => {},

  // Before updating a value.
  // Fired before an `update` query.
  // beforeUpdate: async (model) => {},

  // After updating a value.
  // Fired after an `update` query.
  // afterUpdate: async (model, result) => {},

  // Before destroying a value.
  // Fired before a `delete` query.
  // beforeDestroy: async (model) => {},

  // After destroying a value.
  // Fired after a `delete` query.
  // afterDestroy: async (model, result) => {}
};
