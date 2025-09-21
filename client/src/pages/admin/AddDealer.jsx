import React, { useState } from 'react';
import { useAppContext } from '../../context/AppContext';

const AddDealer = () => {
    
  const { axios, toast } = useAppContext();

  const [isAdding, setIsAdding] = useState(false);

  const [dealerName, setDealerName] = useState('');
  const [dealerAddress, setDealerAddress] = useState('');
  const [dealerEmail, setDealerEmail] = useState('');
  const [dealerContact, setDealerContact] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [pincode, setPincode] = useState('');


  const onSubmitHandler = async (e) => {
      try{
        e.preventDefault();
        setIsAdding(true);

        const dealer = {
            dealerName,
            dealerAddress,
            dealerEmail,
            dealerContact,
            contactPerson,
            companyName,
            gstNumber,
            city,
            state,
            pincode
        }

        const { data } = await axios.post('/dealer/add-dealer', dealer);

        if(data.success){
            toast.success(data.message);
            // Clear form after successful submission
            setDealerName('');
            setDealerAddress('');
            setDealerEmail('');
            setDealerContact('');
            setContactPerson('');
            setCompanyName('');
            setGstNumber('');
            setCity('');
            setState('');
            setPincode('');
        }
        else{
            toast.error(data.message);
      }
    } catch (error) {
      console.log("Error adding dealer:", error);
      
      // Handle different error response formats
      if (error.response?.data?.errors) {
        // Handle validation errors array
        error.response.data.errors.forEach(err => {
          toast.error(err);
        });
      } else if (error.response?.data?.message) {
        // Handle single error message
        toast.error(error.response.data.message);
      } else {
        // Handle network or other errors
        toast.error(error.message || 'Failed to add dealer');
      }
    }
    finally{
        setIsAdding(false);
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Add New Dealer</h1>
            <p className="text-gray-600">Fill in the dealer information below</p>
          </div>

          <form onSubmit={onSubmitHandler} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Dealer Name *
                </label>
                <input
                  type="text"
                  name="dealerName"
                  value={dealerName}
                  onChange={(e) => setDealerName(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter dealer name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="dealerEmail"
                  value={dealerEmail}
                  onChange={(e) => setDealerEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter dealer email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number *
                </label>
                <input
                  type="tel"
                  name="dealerContact"
                  value={dealerContact}
                  onChange={(e) => setDealerContact(e.target.value)}
                  required
                  pattern="[0-9]{10}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter 10-digit contact number"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Address *
                </label>
                <textarea
                  name="dealerAddress"
                  value={dealerAddress}
                  onChange={(e) => setDealerAddress(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter complete dealer address"
                />
              </div>

              {/* Additional Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={contactPerson}
                  onChange={(e) => setContactPerson(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter contact person name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  GST Number
                </label>
                <input
                  type="text"
                  name="gstNumber"
                  value={gstNumber}
                  onChange={(e) => setGstNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter GST number (optional)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter city"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter state"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pincode
                </label>
                <input
                  type="text"
                  name="pincode"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value)}
                  pattern="[0-9]{6}"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
                  placeholder="Enter 6-digit pincode"
                />
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <button
                type="submit"
                disabled={isAdding}
                className="flex-1 bg-brand text-white py-3 px-6 rounded-lg hover:bg-brand-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isAdding ? 'Adding...' : 'Add Dealer'}
              </button>
              <button
                type="button"
                onClick={() => {
                  setDealerName('');
                  setDealerAddress('');
                  setDealerEmail('');
                  setDealerContact('');
                  setContactPerson('');
                  setCompanyName('');
                  setGstNumber('');
                  setCity('');
                  setState('');
                  setPincode('');
                }}
                className="flex-1 bg-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-400 transition-colors font-medium"
              >
                Clear Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddDealer;
