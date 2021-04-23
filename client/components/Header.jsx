import React from 'react'

function Header () {
  return (
    <div className="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4">

      {/* Logo */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <h1 className="leading-none text-2xl text-grey-darkest">
          <a className="no-underline text-grey-darkest hover:text-black" href="#">
            <img className="m-10 ml-16 w-40" src="../../images/logo.png" />
          </a>
        </h1>

        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
      {/* END of Logo */}
      {/* navigation */}
      <nav className="mr-16">
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 ">
            <a className="block rounded-lg ring-red-900 ring-4 p-8 bg-red-700 ring-opacity-95 no-underline text-white hover:text-black hover: no-underline md:border-none" href="#">
                            FOXES
            </a>
          </li>
          <li className="md:ml-4 ">
            <a className="block rounded-lg ring-red-900 ring-4 p-8 bg-red-700 ring-opacity-95 no-underline text-white hover:text-black hover:no-underline md:border-none" href="#">
                            FAQ
            </a>
          </li>
          <li className="md:ml-4 ">
            <a className="block rounded-lg ring-red-900 ring-4 p-8 bg-red-700 ring-opacity-95 no-underline text-white hover:text-black hover:no-underline md:border-none" href="#">
                            FEEDBACK
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- END Global navigation --> */}

    </div>
  )
}

export default Header
