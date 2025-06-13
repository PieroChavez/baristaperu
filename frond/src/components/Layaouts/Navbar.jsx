import { IconButton, Tooltip, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeContext } from "../../ThemeContext";
import { Banderas } from "@/assets/Banderas/Banderas";


import LoginButton from "../Pages/Auth/LoginButton";
import LogoutButton from "../Pages/Auth/LogoutButton";
import { useAuth0 } from '@auth0/auth0-react';
import Avatar from '@mui/material/Avatar'; // Asegúrate de importar Avatar

import {ImgPortada} from "@/assets/ImgPortada/ImgPortada";
import { avatarstorie } from "@/assets/Avatar/Avatar/AvatarStories";

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
import { useNavigate } from 'react-router-dom';



import { Bars3Icon, MagnifyingGlassIcon, ShoppingBagIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { NavLink, Link } from 'react-router-dom';

const navigation = {
  categories: [
    {
      id: 'Productores',
      name: 'Productores',
      featured: [
        {
          name: 'Amazonas',
          href: '/region/amazonas',
          imageSrc: avatarstorie[1].avatar,
          imageAlt: 'Amazonas, región cafetalera del Perú.',
        },
        {
          name: 'Cajamarca',
          href: '/region/cajamarca',
          imageSrc: ImgPortada[6].image,
          imageAlt: 'Cajamarca, región cafetalera del Perú.',
        },
        
       
        
        
        // Agrega más regiones si lo deseas
      ],
      sections: [
        {
          id: 'Regiones',
          name: 'Regiones del Perú',
          items: [
            { name: 'Amazonas', href: '/region/amazonas' },
            { name: 'Cajamarca', href: '/region/cajamarca' },
            { name: 'San Martín', href: '/region/sanmartin' },
            { name: 'Junín', href: '/region/junin' },
            { name: 'Cusco', href: '/region/cusco' },
            { name: 'Puno', href: '/region/puno' },
            // Agrega más regiones aquí
          ],
        },
        {
          id: 'accessories baristas',
          name: 'Accesorios',
          items: [
            { name: 'Filtros', href: '/filtros' },
            { name: 'Prensas', href: '/prensas' },
            { name: 'Molinillos', href: '/molinillos' },
            { name: 'Tazas', href: '/tazas' },
            { name: 'Otros', href: '/otros-accesorios' },
          ],
        },
        {
          id: 'Abonos ',
          name: 'Abonos',
          items: [
            { name: 'Orgánicos', href: '/abonos-organicos' },
            { name: 'Convencionales', href: '/abonos-convencionales' },
          ],
        },
      ],
    },
    {
      id: 'Baristas',
      name: 'Baristas',
      featured: [
        {
          name: 'Cafés del Norte',
          href: '/cafes/norte',
          imageSrc: avatarstorie[2].avatar,
          imageAlt: 'Cafés del Norte del Perú.',
        },
        {
          name: 'Cafés del Centro',
          href: '/cafes/centro',
          imageSrc: avatarstorie[0].avatar,
          imageAlt: 'Cafés del Centro del Perú.',
        },
        
        
      ],
      sections: [
        {
          id: 'Tienda',
          name: 'Tienda',
          items: [
            { name: 'Cafés del Norte', href: '/cafes/norte' },
            { name: 'Cafés del Centro', href: '/cafes/centro' },
            { name: 'Cafés del Sur', href: '/cafes/sur' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accesorios',
          items: [
            { name: 'Filtros', href: '/filtros' },
            { name: 'Prensas', href: '/prensas' },
            { name: 'Molinillos', href: '/molinillos' },
            { name: 'Tazas', href: '/tazas' },
            { name: 'Otros', href: '/otros-accesorios' },
          ],
        },
        {
          id: 'Cafes especiales',
          name: 'Cafés Especiales',
          items: [
            { name: 'Cafés del Norte', href: '/cafes/norte' },
            { name: 'Cafés del Centro', href: '/cafes/centro' },
            { name: 'Cafés del Sur', href: '/cafes/sur' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Nosotros', href: '/company' },
    { name: 'Tiendas', href: '/stores' },
  ],
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const { themeMode, toggleTheme } = useThemeContext();



   const { isAuthenticated, user } = useAuth0();
  const isLoggedIn = isAuthenticated;

  // Simula si el usuario está registrado (reemplaza esto con tu lógica real)
  const isRegistered = false;

  // Función para manejar el click en links protegidos
  const handleProtectedClick = (e, href) => {
    if (!isRegistered) {
      e.preventDefault();
      setShowAlert(true);
    } else {
      navigate(href);
    }
  };


  return (
    <div>
      {/* Navbar fija */}
      <header
        className="fixed top-0 left-0 w-full z-50 bg-white bg-[#000000] dark:bg-gray-800 shadow"
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
                <NavLink to={isLoggedIn ? "/home" : "/"} aria-label="Inicio BARISTAS">
                  <h1 className="text-lg font-bold">BARISTAS</h1>
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
                                          <NavLink
                                            to={item.href}
                                            className="hover:text-gray-800"
                                            onClick={e => handleProtectedClick(e, item.href)}
                                          >
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
                      onClick={e => handleProtectedClick(e, page.href)}
                    >
                      {page.name}
                    </NavLink>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                {isLoggedIn ? (
                  <div className="ml-auto flex items-center space-x-4">
                    {/* Avatar */}
                    <div className="flex flex-col items-center">
                      <Avatar
                        src={user?.picture}
                        alt={user?.name}
                        sx={{ width: 32, height: 32 }}
                      />
                      <span className="text-xs text-gray-400 mt-1">{user?.name}</span>
                    </div>
                    <LogoutButton />
                  </div>
                ) : (
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    <LoginButton />
                    <span aria-hidden="true" className="h-6 w-px bg-gray-200" />
                  </div>
                )}

                <div className="hidden lg:ml-8 lg:flex">
                  {/* Este sigue siendo un <a> porque no es una ruta interna */}
                    <img
                      alt=""
                      src={Banderas[0].Imagen}
                      className="block h-auto w-5 shrink-0"
                    />                   
                    
                  
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <Tooltip title="buscar"></Tooltip>
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

                {/* Botón de modo claro/oscuro */}
                <IconButton onClick={toggleTheme} color="inherit">
                  <Tooltip title={themeMode === "light" ? "Modo oscuro" : "Modo claro"}>
                    {themeMode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                  </Tooltip>
                </IconButton>
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
                <NavLink to="/Home" className="-m-2 block p-2 font-medium text-gray-900">
                  iniciar
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
                  alt="Peru"
                  src={Banderas[0].Imagen}
                  className="block h-auto w-5 shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">CAD</span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      {/* ALERTA DE REGISTRO */}
      {showAlert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs w-full text-center">
            <h2 className="text-lg font-semibold mb-2">¡Debes registrarte!</h2>
            <p className="mb-4">Para acceder a esta sección necesitas iniciar sesión o crear una cuenta.</p>
            <button
              className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              onClick={() => {
                setShowAlert(false);
                navigate('/Login');
              }}
            >
              Ir a Login
            </button>
            <button
              className="ml-2 text-gray-500 hover:underline"
              onClick={() => setShowAlert(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}