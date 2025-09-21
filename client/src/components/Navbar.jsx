import React from 'react'
import { useAppContext } from '../context/AppContext'
import Popup from './PoPUp'
import { dealers, medicines, employees, customer, purchase } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    
    const {isScrolled, isMenuOpen, setIsMenuOpen} = useAppContext();
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);
    const [popupConfig, setPopupConfig] = React.useState({ title: '', columns: [], rows: [] });

    const dealerLinks = [
        { name: 'All Dealers', path: '#' },
        { name: 'Add Dealers', path: '#' },
    ];
    const medicineLinks = [
        { name: 'All Medicine', path: '#' },
        { name: 'Add Medicine', path: '#' },
    ];
    const employeeLinks = [
        { name: 'All Employee', path: '/allemployee' },
        { name: 'Add Employee', path: '/addemployee' },
    ];
    const customerLinks = [
        { name: 'All Customer', path: '/allcustomer' },
        { name: 'Add Customer', path: '/addcustomer' },
    ];
    const purchaseLinks = [
        { name: 'All Purchase', path: '/purchase' },
        { name: 'Add Purchase', path: '/addpurchase' },
    ];

    const navLinks = [
        { 
            name: 'Home',
            path: '/' 
        },
        { 
            name: 'Dealer', 
            path: '#',
            links: dealerLinks,
        },
        { 
            name: 'Medicine',
            path: '#',
            links: medicineLinks
        },
        { 
            name: 'Employee',
            path: '#',
            links: employeeLinks,
        },
        { 
            name: 'Customer',
            path: '#',
            links: customerLinks,
        },
        { 
            name: 'Purchase',
            path: '#',
            links: purchaseLinks,
        },
    ];
    
   
    const [isProductsOpen, setIsProductsOpen] = React.useState(false);


    return (
        <nav className={`fixed top-0 left-0 bg-brand-600 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-3" : "py-4 md:py-3"}`}>

        {/* Logo */}
        <a href="/" className="flex items-center gap-2 ">
            <img src="/fevicon.png" alt="logo" className={`invert-0 h-9 ${isScrolled && "invert opacity-80"}`} />
            <span className='text-xl text-black'>Quick Medi</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link, i) => (
                link.links ? (
                    <div key={i} className="relative group">
                        <button className={`group flex flex-col gap-0.5 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                            {link.name}
                            <div className={`${isScrolled ? 'bg-gray-700' : 'bg-white'} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </button>
                        <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-3 w-56 rounded-xl border border-black/5 bg-white shadow-xl overflow-hidden">
                            <div className="py-1 text-gray-700">
                                { link.links.map((sublink, idx) => (
                                    <a key={idx} href={sublink.path}  onClick={(e) => {
                                        e.preventDefault();
                                        if (link.name === 'Medicine' && sublink.name === 'All Medicine') {
                                            setPopupConfig({
                                                title: 'All Medicines',
                                                columns: [
                                                    { key: 'id', label: 'ID' },
                                                    { key: 'code', label: 'Code' },
                                                    { key: 'name', label: 'Name' },
                                                    { key: 'dealerId', label: 'Dealer ID' },
                                                    { key: 'price', label: 'Price' },
                                                    { key: 'stock', label: 'Stock' },
                                                ],
                                                rows: medicines,
                                            });
                                            setIsPopupOpen(true);
                                        } else if (link.name === 'Dealer' && sublink.name === 'All Dealers') {
                                            setPopupConfig({
                                                title: 'All Dealers',
                                                columns: [
                                                    { key: '_id', label: 'Dealer ID' },
                                                    { key: 'name', label: 'Dealer Name' },
                                                    { key: 'address', label: 'Address' },
                                                    { key: 'email', label: 'Email' },
                                                    { key: 'number', label: 'Number' },
                                                ],
                                                rows: dealers,
                                            });
                                            setIsPopupOpen(true);
                                        }
                                        else if (link.name === 'Employee' && sublink.name === 'All Employee') {
                                            setPopupConfig({
                                                title: 'All Employees',
                                                columns: [
                                                    { key:'employeeId', label: 'Employee ID' },
                                                    { key:'firstName',  label: 'First Name' },
                                                    { key:'lastName',   label: 'Last Name' },
                                                    { key:'address',    label: 'Address' },
                                                    { key:'salary',     label: 'Salary' },
                                                    { key:'contact',    label: 'Contact' },
                                                    { key:'email',      label: 'Email' },
                                                ],
                                                rows: employees,
                                            });
                                            setIsPopupOpen(true);
                                        }
                                        else if (link.name === 'Customer' && sublink.name === 'All Customer'){
                                            setPopupConfig({
                                                title:'All Customers',
                                                columns:[
                                                    { key:'id',        label: 'Customer ID' },
                                                    { key:'firstName', label:'First Name' },
                                                    { key:'lastName',  label:'Last Name' },
                                                    { key:'address',   label:'Address' },
                                                    { key:'contact',   label:'Contact' },
                                                    { key:'email',     label:'Email' },
                                                ],
                                                rows: customer,
                                            });
                                            setIsPopupOpen(true);
                                        }
                                        else if (link.name === 'Purchase' && sublink.name === 'All Purchase'){
                                            setPopupConfig({
                                                title:'All Purchases',
                                                columns:[
                                                    { key:'id',           label: 'Purchase ID' },
                                                    { key:'productName',  label:'Product Name' },
                                                    { key:'customerName', label:'Customer Name' },
                                                    { key:'contact',      label:'Contact' },
                                                    { key:'price',        label:'Price' },
                                                    { key:'quantity',     label:'Quantity' },
                                                ],
                                                rows: purchase,
                                            });
                                            setIsPopupOpen(true);
                                        }
                                    }} className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50">
                                        {sublink.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                        {link.name}
                        <div className={`${isScrolled ? 'bg-gray-700' : 'bg-white'} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                )
            ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
            <svg className={`h-6 w-6 text-white transition-all duration-500 ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <Link to='admin' className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
            Admin Login
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
            <svg onClick={() => setIsMenuOpen(prev => !prev)} className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <line x1="4" y1="6" x2="20" y2="6" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
            <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
            </button>

            {navLinks.map((link, i) => (
                link.name === 'Products' ? (
                    <div key={i} className="w-72">
                        <button
                            className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-gray-100"
                            onClick={() => setIsProductsOpen(prev => !prev)}
                        >
                            <span>Products</span>
                            <svg className={`h-5 w-5 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                            </svg>
                        </button>
                        {isProductsOpen && (
                            <div className="mt-2 rounded-lg border border-black/5 overflow-hidden">
                                {productLinks.map((p, idx) => (
                                    <a
                                        key={idx}
                                        href={p.path}
                                        className="block px-4 py-2 hover:bg-gray-50"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {p.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ) : (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                )
            ))}


            <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                Admin Login
            </button>
        </div>

        {/* Popup Modal */}
        {isPopupOpen && (
            <Popup
                title={popupConfig.title}
                columns={popupConfig.columns}
                rows={popupConfig.rows}
                onClose={() => setIsPopupOpen(false)}
            />
        )}
        </nav>
    );
}
export default Navbar