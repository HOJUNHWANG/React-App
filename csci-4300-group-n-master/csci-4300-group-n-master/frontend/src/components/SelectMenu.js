import {Fragment} from "react";
import {Listbox, Transition} from "@headlessui/react";
import {ChevronDownIcon} from "@heroicons/react/20/solid";
import {classNames} from "../utils/utils";

const SelectMenu = ({label, options, selected, setSelected}) => {
  return (
    <Listbox value={selected} onChange={setSelected}>
      {({open}) => (
        <div>
          <Listbox.Label className="block text-black text-lg font-medium">
            {label}
          </Listbox.Label>
          <div className="relative">
            <Listbox.Button
              className="relative bg-transparent w-full cursor-default border-b border-black py-3 pl-3 pr-10 text-left focus:border-b-2 sm:text-sm">
              <span className="block truncate text-lg">
                {selected?.name ?? ""}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2">
                <ChevronDownIcon
                  className="h-6 w-6 text-black"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              enter="transition duration-100 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-75 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Listbox.Options
                className="absolute z-10 max-h-36 w-full overflow-auto bg-white border py-1 focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <Listbox.Option
                    key={option.id}
                    className={({active}) =>
                      classNames(
                        active ? "bg-card" : "",
                        "relative cursor-default select-none text-black py-2 pl-3 pr-9"
                      )
                    }
                    value={option}
                  >
                    {({selected, active}) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold" : "font-normal",
                            "block truncate text-lg text-black"
                          )}
                        >
                          {option.name}
                        </span>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </div>
      )}
    </Listbox>
  );
};

export default SelectMenu;
