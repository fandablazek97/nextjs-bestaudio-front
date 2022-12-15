import Button from "@ui/Button";
import BlogPostCard from "./BlogPostCard";
// import BlogFilter from "./BlogFilter";
import { useState, useEffect } from "react";
import { config } from "@configs/site-config";

type BlogPostsProps = {
  className?: string;
};


let downloadedData: any[] = [];

export default function BlogPosts({
  className = "",
}: BlogPostsProps) {
  const [dataCounter, setDataCounter] = useState<number | null>(null);
  const [hasItemsLeft, setHasItemsLeft] = useState<boolean>(true);
  const itemsAtStart = 6;
  const addItems = 3;
  const populateQuery = "?populate[mainImage][fields][0]=url"
  const fieldsQuery = "&fields[0]=name&fields[1]=length&fields[2]=date&fields[3]=perex";
  const sortQuery = "&sort[0]=id%3Adesc"

  useEffect(() => {
    setHasItemsLeft(true);
    getData(0, itemsAtStart, true)
  },[])

  async function getData(currentAmount: number, addXItems: number, filterChanged: boolean) {
    let paginationQuery = "&pagination[start]=" + currentAmount + "&pagination[limit]=" + addXItems;
    await fetch(config.ipToFetch + "/api/blogs"
      + populateQuery
      + paginationQuery
      + fieldsQuery
      + sortQuery
    )
      .then(response => response.json())
      .then((all) => {
        /* Pokud se to úspěšně připojilo */
        if (all.data !== undefined && all.data !== null) {
          /* Pokud zatím nejsou žádný data nebo se změnil filtr */
          if (dataCounter === 0 || dataCounter === null || filterChanged) {
            /* Pokud se v databázi nenašla žádná data podle parametrů */
            if (all.data.length === 0) {
              downloadedData = [];
              setDataCounter(0);
              setHasItemsLeft(false);
            }
            /* Pokud se našli data */
            else {
              downloadedData = all.data;
              setDataCounter(all.data.length);
              /* Pokud je stažených dat míň než bylo požádáno -> skryje tlačítko */
              if (all.data.length < currentAmount + addXItems) {
                setHasItemsLeft(false);
              }
            }
          }
          /* Pokud už existujou nějaký data */
          else {
            downloadedData.push(...all.data);
            setDataCounter(downloadedData.length)

            /* Pokud je dat míň než bylo požádáno -> skryje tlačítko */
            if (downloadedData.length < currentAmount + addXItems) {
              setHasItemsLeft(false);
            }
          }
        }
        /* Špatný připojení/požadavek */
        else {
          downloadedData = [];
          setDataCounter(null);
        }
      })
  }

  return (
    <div className={`w-full ${className}`}>
      {/* <div>
        <BlogFilter className="mb-12 md:mb-16" />
      </div> */}
      <div className="grid w-full grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:gap-y-24 xl:grid-cols-3 xl:gap-x-14"> 
      {downloadedData.map((post, i) => (
        <BlogPostCard
          key={i}
          href={"/blog/" + post.id}
          imageSrc={post.attributes.mainImage.data.attributes.url}
          title={post.attributes.name}
          length={post.attributes.length}
          date={post.attributes.date}
          perex={post.attributes.perex}
          className="col-span-1"
        />
      ))}
      </div>
      <div className="mt-16 flex items-center justify-center lg:mt-28">
      {hasItemsLeft &&
        <Button 
          size="lg"
          onClick={() => getData(dataCounter!, addItems, false)}
        >
          Načíst další
        </Button>
      }
      </div>
    </div>
  );
}
