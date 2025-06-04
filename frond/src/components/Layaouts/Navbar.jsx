'use client'


import {
 // HomeIcon,
 // UserGroupIcon,
 // ChatBubbleLeftEllipsisIcon,
 // BellIcon,

 // MagnifyingGlassIcon,
 // CogIcon,
 // ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline';

import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom';

const navigation = {
  categories: [
    {
      id: 'Productores',
      name: 'Productores',
      featured: [
        {
          name: 'Cafeterias',
          href: '/Cafeterias',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Ferias',
          href: '/Ferias',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'Cafeterias',
          name: 'Cafeterias',
          items: [
            { name: 'Tops', href: '/tops' },
            { name: 'Dresses', href: '/dresses' },
            { name: 'Pants', href: '/pants' },
            { name: 'Denim', href: '/denim' },
            { name: 'Sweaters', href: '/sweaters' },
            { name: 'T-Shirts', href: '/t-shirts' },
            { name: 'Jackets', href: '/jackets' },
            { name: 'Activewear', href: '/activewear' },
            { name: 'Browse All', href: '/browse-all' },
          ],
        },
        {
          id: 'accessories baristas',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/watches' },
            { name: 'Wallets', href: '/wallets' },
            { name: 'Bags', href: '/bags' },
            { name: 'Sunglasses', href: '/sunglasses' },
            { name: 'Hats', href: '/hats' },
            { name: 'Belts', href: '/belts' },
          ],
        },
        {
          id: 'Abonos ',
          name: 'Abonos',
          items: [
            { name: 'Full Nelson', href: '/full-nelson' },
            { name: 'My Way', href: '/my-way' },
            { name: 'Re-Arranged', href: '/re-arranged' },
            { name: 'Counterfeit', href: '/counterfeit' },
            { name: 'Significant Other', href: '/significant-other' },
          ],
        },
      ],
    },
    {
      id: 'Baristas',
      name: 'Baristas',
      featured: [
        {
          name: 'Trabajos',
          href: '/Trabajos',
          imageSrc:
            'https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Eventos',
          href: '/Eventos',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'Tienda',
          name: 'Tienda',
          items: [
            { name: 'Tops', href: '/men-tops' },
            { name: 'Pants', href: '/men-pants' },
            { name: 'Sweaters', href: '/men-sweaters' },
            { name: 'T-Shirts', href: '/men-t-shirts' },
            { name: 'Jackets', href: '/men-jackets' },
            { name: 'Activewear', href: '/men-activewear' },
            { name: 'Browse All', href: '/men-browse-all' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '/men-watches' },
            { name: 'Wallets', href: '/men-wallets' },
            { name: 'Bags', href: '/men-bags' },
            { name: 'Sunglasses', href: '/men-sunglasses' },
            { name: 'Hats', href: '/men-hats' },
            { name: 'Belts', href: '/men-belts' },
          ],
        },
        {
          id: 'Cafes especiales',
          name: 'Cafes especiales',
          items: [
            { name: 'Re-Arranged', href: '/men-re-arranged' },
            { name: 'Counterfeit', href: '/men-counterfeit' },
            { name: 'Full Nelson', href: '/men-full-nelson' },
            { name: 'My Way', href: '/men-my-way' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '/company' },
    { name: 'Stores', href: '/stores' },
  ],
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div>
      {/* Navbar fija */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white shadow"
        style={{ minHeight: 64 }}
      >
        <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="size-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <NavLink to="/">
                  <span className="sr-only">BARISTAS</span>
                  <h1>BARISTAS</h1>
                </NavLink>
              </div>
               

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      <div className="relative flex">
                        <PopoverButton className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800 data-open:border-indigo-600 data-open:text-indigo-600">
                          {category.name}
                        </PopoverButton>
                      </div>

                      <PopoverPanel
                        transition
                        className="absolute inset-x-0 top-full text-sm text-gray-500 transition data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                      >
                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                        <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-sm" />

                        <div className="relative bg-white">
                          <div className="mx-auto max-w-7xl px-8">
                            <div className="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                              <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                {category.featured.map((item) => (
                                  <div key={item.name} className="group relative text-base sm:text-sm">
                                    <img
                                      alt={item.imageAlt}
                                      src={item.imageSrc}
                                      className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                                    />
                                    <NavLink to={item.href} className="mt-6 block font-medium text-gray-900">
                                      <span aria-hidden="true" className="absolute inset-0 z-10" />
                                      {item.name}
                                    </NavLink>
                                    <p aria-hidden="true" className="mt-1">
                                      Shop now
                                    </p>
                                  </div>
                                ))}
                              </div>
                              <div className="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                                {category.sections.map((section) => (
                                  <div key={section.name}>
                                    <p id={`${section.name}-heading`} className="font-medium text-gray-900">
                                      {section.name}
                                    </p>
                                    <ul
                                      role="list"
                                      aria-labelledby={`${section.name}-heading`}
                                      className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                    >
                                      {section.items.map((item) => (
                                        <li key={item.name} className="flex">
                                          <NavLink to={item.href} className="hover:text-gray-800">
                                            {item.name}
                                          </NavLink>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </PopoverPanel>
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <NavLink
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <NavLink to="/Home" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Iniciar
                  </NavLink>
                  <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  <NavLink to="/Login" className="text-sm font-medium text-gray-700 hover:text-gray-800">
                    Create account
                  </NavLink>
                </div>

                <div className="hidden lg:ml-8 lg:flex">
                  {/* Este sigue siendo un <a> porque no es una ruta interna */}
                  <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                    <img
                      alt=""
                      src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                      className="block h-auto w-5 shrink-0"
                    />
                    <span className="ml-3 block text-sm font-medium">CAD</span>
                    <span className="sr-only">, change currency</span>
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon aria-hidden="true" className="size-6" />
                  </a>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="#" className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Menú móvil */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 border-b-2 border-transparent px-1 py-4 text-base font-medium whitespace-nowrap text-gray-900 data-selected:border-indigo-600 data-selected:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-10 px-4 pt-10 pb-8">
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-100 object-cover group-hover:opacity-75"
                          />
                          <NavLink to={item.href} className="mt-6 block font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </NavLink>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-900">
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <NavLink to={item.href} className="-m-2 block p-2 text-gray-500">
                                {item.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <NavLink to={page.href} className="-m-2 block p-2 font-medium text-gray-900">
                    {page.name}
                  </NavLink>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <NavLink to="/Login" className="-m-2 block p-2 font-medium text-gray-900">
                  Sign in
                </NavLink>
              </div>
              <div className="flow-root">
                <NavLink to="/Login" className="-m-2 block p-2 font-medium text-gray-900">
                  Create account
                </NavLink>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              {/* Este sigue siendo un <a> porque no es una ruta interna */}
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg"
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
