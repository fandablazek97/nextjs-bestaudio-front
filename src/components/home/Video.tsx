import { Dialog as Modal, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

// Icons
import { BsFillPlayFill } from "react-icons/bs";
import { MdClose } from "react-icons/md";

export default function Video() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <section id="video">
      <div className="relative">
        <button
          aria-label="Přehrát Video"
          className="group relative isolate aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-xl bg-gray-900 focus-visible:outline focus-visible:outline-4 focus-visible:outline-primary"
          onClick={openModal}
        >
          <video
            autoPlay
            loop
            muted
            className="h-full w-full object-cover opacity-40"
          >
            <source src="/video/bestaudio-preview.mp4" type="video/mp4" />
            Váš prohlížeč nepodporuje video
          </video>
          <div className="z-1 absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2">
            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-transparent">
              <BsFillPlayFill className="z-10 text-3xl text-primary" />
              <div className="absolute inset-0 -z-10 h-20 w-20 rounded-full bg-white/35 backdrop-blur-lg transition-transform duration-300 ease-out-back group-hover:scale-[1.25] lg:group-hover:scale-[1.35]"></div>
            </div>
          </div>
        </button>
        <span className="pointer-events-none absolute bottom-5 left-5 block font-display text-xs font-semibold uppercase tracking-widest sm:bottom-8 sm:left-8 sm:text-sm">
          Přehrát video
        </span>
      </div>

      {/* Samotný modal */}
      <Transition show={isOpen} as={Fragment}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-[200] h-screen w-screen"
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Overlay */}
            <Modal.Overlay className="fixed inset-0 z-[200] h-screen w-screen bg-body-100 bg-opacity-80 backdrop-blur-md" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition duration-400"
            enterFrom="opacity-0 scale-90"
            enterTo="opacity-100 scale-100"
            leave="transition duration-300"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-90"
          >
            {/* Obsah modalu - container pro obrázek */}
            <div className="relative top-1/2 bottom-1/2 z-[200] mx-auto w-[90%] max-w-6xl -translate-y-1/2 transform">
              <div className="aspect-[16/9]">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KgqNp20oL-o"
                  title="YouTube video player"
                  className="h-full w-full bg-gray-400"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            {/* Tlačítko pro zavření (křížek) */}
            <button
              type="button"
              onClick={closeModal}
              className="fixed top-6 right-6 z-[210] rounded-full bg-transparent p-2 text-4xl text-white transition-colors duration-200 hover:bg-white hover:bg-opacity-15 focus:bg-white focus:bg-opacity-15"
            >
              <span className="sr-only">Zavřít</span>
              <MdClose />
            </button>
          </Transition.Child>
        </Modal>
      </Transition>
    </section>
  );
}
