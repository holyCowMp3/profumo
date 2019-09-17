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

    switch (result.status) {
      case 'success':
      case 'wait_accept': {
        let liqPayConf = require('../../liqpayConf.json');
        let novaPoshta = new NovaPoshta({apiKey: liqPayConf.nova_poshta});
        let profumoCounterparty = '4187cb04-cd83-11e9-9937-005056881c6b';
        let order = await strapi.services.order.fetch({'_id': result.order_id});
        if (order) {
          let price = 0;
          for (let product of order.orders) {
            let productFromDb = await strapi.services.product.fetch({'_id': product.product.id});
            let category = await strapi.services.category.fetch({'_id': productFromDb.category});
            let minusPrice = 0;
            if (category.discount) {
              minusPrice = (productFromDb.price * (category.discount.percent / 100));
            } else {
              if (productFromDb.discounts) {
                for (let disc of productFromDb.discounts) {
                  minusPrice += (disc.percent / 100) * (productFromDb.price - minusPrice);
                }
              }
              price += ((productFromDb.discounts ? productFromDb.price - minusPrice : productFromDb.price) * product.count);
            }
          }

          // eslint-disable-next-line no-inner-declarations
          function formatDate(date) {
            var day = date.getDate();
            var monthIndex = date.getMonth() + 1;
            var year = date.getFullYear();
            return day + '.' + monthIndex + '.' + year;
          }

          return await novaPoshta.counterparty.saveCounterparty({
            FirstName: order.deliveryInfo.name,
            MiddleName: '',
            LastName: order.deliveryInfo.surname,
            Phone: order.deliveryInfo.phone,
            Email: '',
            CounterpartyType: 'PrivatePerson',
            CounterpartyProperty: 'Recipient'
          }).then((res) => {

            return novaPoshta.document.saveInternetDocument(
              {
                NewAddress: '1',
                PayerType: 'Sender',
                PaymentMethod: 'Cash',
                CargoType: 'Parcel',
                VolumeGeneral: '0.1',
                Weight: '1',
                ServiceType: 'WarehouseWarehouse',
                SeatsAmount: '1',
                Description: 'Косметичні засоби. Доставка з післяоплатою',
                Cost: price,
                CitySender: 'e221d642-391c-11dd-90d9-001a92567626',
                Sender: profumoCounterparty,
                SenderAddress: '5a39e5a0-e1c2-11e3-8c4a-0050568002cf',
                ContactSender: 'fb7ee3ed-cfc3-11e9-9937-005056881c6b',
                SendersPhone: '380950831150',
                CityRecipient: order.deliveryInfo.cityCode,
                Recipient: res.data[0].Ref,
                RecipientAddress: order.deliveryInfo.postOfficeCode,
                ContactRecipient: res.data[0].Ref,
                RecipientsPhone: order.deliveryInfo.phone,
                DateTime: formatDate(new Date())
              }
            ).then(json => {

              order.newpost = json.data;
              order.status = result.status;
              strapi.services.order.edit({'_id': order._id}, order);
              return json.data;
            }).catch(err => console.log(err));

          });
        }
      }
    }

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
