import { FaFacebookF, FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
const Footer = () => {
  return (

<div>
  <div className="mt-10 bg-neutral text-neutral-content">
    <footer className="p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center items-center">

      {/* Contact Info */}
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>1234 Main St, Anytown, USA</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: tstanvir371806@gmail.com</p>
      </div>

      {/* Social Icons */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold">Follow Us</h2>

        <div className="flex justify-center items-center gap-6 text-xl">
          <a href="#" className="hover:text-blue-500 transition duration-300">
            <FaFacebookF />
          </a>

          <a href="#" className="hover:text-gray-400 transition duration-300">
            <FaGithub />
          </a>

          <a href="#" className="hover:text-blue-400 transition duration-300">
            <FaLinkedinIn />
          </a>

          <a
            href="mailto:tstanvir371806@gmail.com"
            className="hover:text-red-400 transition duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

    </footer>
  </div>

  {/* Bottom */}
  <div className="text-center py-4 bg-neutral text-neutral-content">
    <span className="text-sm text-white">
      © 2024 Bistro Client. All rights reserved.
    </span>
  </div>
</div>


  )
}

export default Footer