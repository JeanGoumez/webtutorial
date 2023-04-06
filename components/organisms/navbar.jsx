import { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  BookOpenIcon,
  CalendarIcon,
  GlobeAltIcon,
  MenuIcon,
  ShieldCheckIcon,
  SupportIcon,
  UserIcon,
  DocumentTextIcon,
  XIcon,
  HomeIcon,
  BeakerIcon,
  CollectionIcon,
  HashtagIcon,
  ChevronDownIcon,
  PresentationChartBarIcon,
} from "@heroicons/react/24/solid";
// import { ChevronDownIcon } from "@heroicons/react/solid";
import logodiadunjbgwhite from "@/public/herramienta-de-recorte-white.png";
import logodiadunjbg from "@/public/herramienta-de-recorte.png";
import { ROUTE } from "@/utils/shared";
import { RedSocial } from "@/components/molecules";

const modalidades = [
  {
    name: "FASE I - 2023",
    description: "",
    href: ROUTE.fasei,
    icon: BookOpenIcon,
  },
  // {
  //   name: "Extraordinario",
  //   description: "",
  //   href: ROUTE.extraordinario,
  //   icon: AcademicCapIcon,
  // },
  // {
  //   name: "FASE II",
  //   description: "",
  //   href: ROUTE.faseii,
  //   icon: GlobeAltIcon,
  // },
  // {
  //   name: "2022-II MINEDU",
  //   description: "",
  //   href: ROUTE.minedu,
  //   icon: GlobeAltIcon,
  // },
];

const appmenu = [
  {
    name: "Inicio",
    description: "",
    href: ROUTE.inicio,
    icon: HomeIcon,
  },
  {
    name: "Programas",
    description: "",
    href: ROUTE.principal,
    icon: CollectionIcon,
  },
  {
    name: "Reglamento",
    description: "",
    href: ROUTE.principal,
    icon: DocumentTextIcon,
  },
  {
    name: "Vacantes",
    description: "",
    href: ROUTE.principal,
    icon: HashtagIcon,
  },
  {
    name: "Estadísticas",
    description: "",
    href: ROUTE.principal,
    icon: PresentationChartBarIcon,
  },
];

const admision = [
  {
    name: "Temario",
    description: "Contenido temático del Examen de Admisión UNJBG",
    href: ROUTE.principal,
    icon: SupportIcon,
  },
  {
    name: "Matriz de evaluación",
    description: "Cantidad de preguntas que entran en el examen",
    href: ROUTE.principal,
    icon: BookmarkAltIcon,
  },
  // {
  //   name: "Eventos",
  //   description: "Nuestra lista de eventos",
  //   href: ROUTE.eventos,
  //   icon: CalendarIcon,
  // },
  {
    name: "Protocolo COVID-19",
    description: "Protocolo de bioseguridad",
    href: ROUTE.principal,
    icon: ShieldCheckIcon,
  },
  {
    name: "Resultados",
    description: "Resultados de procesos de admisión",
    href: ROUTE.principal,
    icon: DocumentTextIcon,
  },
  // {
  //   name: "Ingresantes",
  //   description: "Cronograma e información de entrega de constancias",
  //   href: ROUTE.ingresantes,
  //   icon: UserIcon,
  // },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="fixed z-50 w-full bg-orange-900">
      <Popover className="relative bg-rojo-500 z-50 w-full">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3">
            <div className="flex justify-start md:w-0 md:flex-1">
              <Link href={ROUTE.inicio}>
                <Image
                  width={40}
                  height={11}
                  src={logodiadunjbgwhite}
                  alt="Logo de la Dirección de Admisión - UNJBG"
                  className="cursor-pointer"
                />
              </Link>
            </div>
            {/* bug found */}
            <div className="mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <BeakerIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            {/* bug found */}
            <Popover.Group as="nav" className="hidden md:flex gap-5 ">
              <Link href={ROUTE.inicio}>
                <span className="text-base font-medium cursor-pointer text-gray-50 hover:text-gray-300">
                  Inicio
                </span>
              </Link>
              <Link href={ROUTE.principal}>
                <span className="text-base font-medium cursor-pointer text-gray-50 hover:text-gray-300">
                  Proyecto
                </span>
              </Link>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-200" : "text-gray-50",
                        "group bg-rojo-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rojo-400"
                      )}
                    >
                      <span>Modalidades</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-200",
                          "ml-2 h-5 w-5 group-hover:text-gray-300 text-gray-200"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-xs sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        {({ close }) => (
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {modalidades.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <button onClick={() => close()}>
                                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer text-left">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-azul-500"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                      </div>
                                    </div>
                                  </button>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              {/* <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-200" : "text-gray-50",
                        "group bg-rojo-500 rounded-md inline-flex items-center text-base font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rojo-400"
                      )}
                    >
                      <span>Admisión</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-200",
                          "ml-2 h-5 w-5 group-hover:text-gray-300 text-gray-200"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-sm sm:px-0">
                        {({ close }) => (
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {admision.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <button onClick={() => close()}>
                                    <div className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50 cursor-pointer text-left">
                                      <item.icon
                                        className="flex-shrink-0 h-6 w-6 text-azul-500"
                                        aria-hidden="true"
                                      />
                                      <div className="ml-4">
                                        <p className="text-base font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="mt-1 text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </div>
                                  </button>
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover> */}

              <Link href={ROUTE.principal}>
                <span className="text-base font-medium cursor-pointer text-gray-50 hover:text-gray-300">
                  Reglamento
                </span>
              </Link>

              <Link href={ROUTE.principal}>
                <span className="text-base font-medium cursor-pointer text-gray-50 hover:text-gray-300">
                  Vacantes
                </span>
              </Link>

              <Link href={ROUTE.principal}>
                <span className="text-base font-medium cursor-pointer text-gray-50 hover:text-gray-300">
                  Estadísticas
                </span>
              </Link>
            </Popover.Group>
            <div className="hidden md:flex items-center gap-4 justify-end md:flex-1 md:w-0">
              <RedSocial redSocial="facebook" width={20} height={20} />
              <RedSocial redSocial="instagram" width={20} height={20} />
              <RedSocial redSocial="youtube" width={24} height={24} />
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right lg:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white ">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <Image
                      width={140}
                      height={40}
                      src={logodiadunjbg}
                      alt="Logo de la Dirección de Admisión - UNJBG"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>

                <div className="my-3">
                  <p className="text-center pb-3 text-gray-400">Menú</p>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {appmenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-azul-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="my-3">
                  <p className="text-center pb-3 text-gray-400">Modalidades</p>
                  <nav className="grid gap-y-8">
                    {modalidades.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-azul-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>

                <div>
                  <p className="text-center pb-3 text-gray-400">Admisión</p>
                  <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                    {admision.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >
                        <item.icon
                          className="flex-shrink-0 h-6 w-6 text-azul-500"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
