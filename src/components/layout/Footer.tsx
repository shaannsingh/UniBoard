const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            © 2025 UniBoard. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Terms
            </a>
            <a
              href="#"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
