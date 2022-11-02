import Button from "@ui/Button";
import Heading from "@ui/Heading";
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const testimonialsArray = [
  // Column 1
  [
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequ. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta null labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta null labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta null labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta null labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta null labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut liet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducim voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet con itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci e libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione la sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minulique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minulique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducim voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducim voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
  ],
  // Column 2
  [
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similicorrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad miratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possit sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero poss corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
  ],
  // Column 3
  [
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Di ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Di ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetu consequ. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet c nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquam aut libero possimus similique obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicin obcaecati ratione labore voluptates itaque quidem, corrupti eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliquati eveniet sit voluptatibus. Architecto, in dolorem!",
    },
    {
      avatar: "/images/car-brands/bmw.jpg",
      name: "Jméno Příjmení",
      car: "BMW X5",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta nulla ducimus amet consequatur adipisci eaque nobis et ad minus consequuntur aliqua, in dolorem!",
    },
  ],
];

type TestimonialProps = {
  avatar: string;
  name: string;
  car: string;
  content: string;
};

export function Testimonial({ avatar, name, car, content }: TestimonialProps) {
  return (
    <li className="col-span-1 flex flex-col gap-4 rounded-xl bg-body-100 px-6 py-8">
      <div className="flex gap-3 sm:gap-5">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full">
          <img
            src={avatar}
            alt={name}
            width="64"
            height="64"
            className="h-12 w-12"
          />
        </div>
        <div className="flex grow flex-col">
          <Heading as={"span"} size="sm" color="primary">
            {name}
          </Heading>
          <span className="text-xs">{car}</span>
        </div>
      </div>
      <p className="text-sm">{content}</p>
    </li>
  );
}

type TestimonialsProps = {
  className?: string;
};

export default function Testimonials({ className = "" }: TestimonialsProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isCollapseButtonVisible, setIsCollapseButtonVisible] = useState(false);
  const [hasTransition, setHasTransition] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { ref: element, inView } = useInView({ threshold: 0 });
  const initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }

    if (isExpanded) {
      ref.current!.focus({ preventScroll: isExpanded });
    }

    if (!isExpanded && !initial.current) {
      ref.current!.focus();
      ref.current!.scrollIntoView();
    }

    if (isExpanded) {
      setIsCollapseButtonVisible(false);
    }
  }, [isExpanded]);

  useEffect(() => {
    setTimeout(() => setHasTransition(isExpanded), 0);
  }, [isExpanded]);

  useEffect(() => {
    if (!isExpanded || !inView) return;
    function onScroll() {
      const bodyRect = document.body.getBoundingClientRect();
      const rect = ref.current!.getBoundingClientRect();
      const middle =
        rect.top + rect.height / 4 - bodyRect.top - window.innerHeight / 2;
      const isHalfWay = window.scrollY > middle;
      if (isCollapseButtonVisible && !isHalfWay) {
        setIsCollapseButtonVisible(false);
        console.log(isCollapseButtonVisible);
      } else if (!isCollapseButtonVisible && isHalfWay) {
        setIsCollapseButtonVisible(true);
        console.log(isCollapseButtonVisible);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [isExpanded, isCollapseButtonVisible, inView]);
  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        ref={element}
        className={`grid grid-cols-1 items-start gap-8 md:grid-cols-2 xl:grid-cols-3 ${
          !isExpanded ? "max-h-[45rem] overflow-hidden" : ""
        }`}
      >
        {testimonialsArray.map((column, i) => (
          <ul
            key={i}
            className={`
              space-y-8
              ${i === 1 ? "hidden md:block" : ""}
              ${i === 2 ? "hidden xl:block" : ""}`}
          >
            {column.map((testimonial, i) => (
              <Testimonial
                key={i}
                avatar={testimonial.avatar}
                name={testimonial.name}
                car={testimonial.car}
                content={testimonial.content}
              />
            ))}
          </ul>
        ))}
      </div>
      <div
        className={`flex h-64 w-full items-center justify-center bg-gradient-to-t from-body to-transparent
        ${hasTransition ? "transition-[transform,opacity] duration-300" : ""}
        ${isExpanded ? "sticky bottom-0 translate-y-0" : "-translate-y-64"}
        ${
          isExpanded && !isCollapseButtonVisible
            ? "translate-y-8 opacity-0"
            : ""
        }
        ${
          isExpanded && isCollapseButtonVisible
            ? "translate-y-0 opacity-100"
            : ""
        }
        `}
      >
        <Button onClick={() => setIsExpanded(!isExpanded)} type="button">
          {!isExpanded ? "Přečíst více" : "Dobře, už to chápu..."}
        </Button>
      </div>
    </div>
  );
}
