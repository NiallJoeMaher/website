import Image from "next/image";

export default function BioFooter() {
  return (
    <div className="max-w-3xl mx-auto border-t pt-6">
      <div className="flex mx-2 sm:mx-6 md:mx-auto">
        <div className="mr-4 flex-shrink-0 self-center">
          <Image height={70} width={70} src="/images/hotperson.jpg" />
        </div>
        <div>
          <h4 className="text-white text-lg font-bold">
            Written by Niall Maher
          </h4>
          <p className="mt-1 text-white">
            Writing about business JavaScript and web development | CTO @{" "}
            <a
              className="fancy-pants-link"
              target="_blank"
              href="https://spark-hq.com"
            >
              Spark
            </a>{" "}
            (Dublin, Ireland) | Building{" "}
            <a
              className="fancy-pants-link"
              target="_blank"
              href="https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw"
            >
              Codú Community
            </a>
            , a Web Development Community. Often likes to build things while
            drinking a beer and very seldom sarcastic.
          </p>
        </div>
      </div>
    </div>
  );
}
