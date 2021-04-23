import React from 'react'

function Header () {
  return (
    <div className="md:flex md:items-center md:justify-between p-4 pb-0 md:pb-4 bg-red-900 shadow-2xl font-bold text-lg">

      {/* Logo */}
      <div className="flex items-center justify-between mb-4 md:mb-0">
        <a className="" href="#">
          <img className="my-4 mx-10 ml-16 w-28" src="../../images/logo.png" />
        </a>

        <a className="text-black hover:text-orange md:hidden" href="#">
          <i className="fa fa-2x fa-bars"></i>
        </a>
      </div>
      {/* END of Logo */}
      {/* navigation */}
      <nav className="mr-16">
        <ul className="list-reset md:flex md:items-center">
          <li className="md:ml-4 ">
            <a className="block rounded-lg py-4 px-8 bg-red-800 hover:bg-orange-dark shadow-2xl no-underline text-white hover:text-black hover: no-underline md:border-none" href="#">
                            FOXES
            </a>
          </li>
          <li className="md:ml-4 ">
            <a className="block rounded-lg py-4 px-8 bg-red-800 hover:bg-orange-dark shadow-2xl no-underline text-white hover:text-black hover:no-underline md:border-none" href="#">
                            FEEDBACK
            </a>
          </li>
          <li className="md:ml-4 ">
            <a className="block rounded-lg py-4 px-8 bg-red-800 hover:bg-orange-dark shadow-2xl no-underline text-white hover:text-black hover:no-underline md:border-none" href="#">
                            FAQ
            </a>
          </li>
        </ul>
      </nav>
      {/* <!-- END Global navigation --> */}

    </div>
  )
}

export default Header
