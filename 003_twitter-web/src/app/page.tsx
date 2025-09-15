import { ClientFeed } from "./_components/ClientFeed";
import { FeedList } from "./_components/FeedListFollowed";

export default async function Home() {
  return (
    <ClientFeed
      feedRecoomend={{
        type: "recoomend",
        component: <FeedList userId="shoet" feedType="recoomend" />,
      }}
      feedFollowed={{
        type: "followed",
        component: <FeedList userId="shoet" feedType="followed" />,
      }}
    />
  );
}
