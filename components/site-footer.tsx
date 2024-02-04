export function SiteFooter() {
  return (
    <div className="relative w-full mx-auto text-sm md:px-6">
      <footer className="block py-4">
        <div className="mx-auto">
          <hr className="mb-4 border-gray-200 border-b-1" />
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full px-4 md:w-4/12">
              <div className="mb-2 text-center md:mb-0 md:text-left">
                <a
                  href="https://www.creative-tim.com/?ref=npr-footeradmin"
                  target="_blank"
                  className="py-1 text-sm font-semibold text-center text-blueGray-500 md:text-left"
                  rel="noreferrer"
                >
                  Copyright © 2023 Earn Dollars
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
