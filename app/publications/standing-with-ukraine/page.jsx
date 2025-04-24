import React from "react";
import { Inter } from "next/font/google";
import Heading from "@/components/heading";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title:
    "Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities",
  description:
    "An examination of the impact of war on Ukrainian libraries and culture, and strategies for supporting Ukrainian communities through library collections.",
  openGraph: {
    title:
      "Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities",
    description:
      "An examination of the impact of war on Ukrainian libraries and culture, and strategies for supporting Ukrainian communities through library collections.",
    type: "article",
    authors: ["Gabriella Reznowski", "Emily Cukier", "Ruslan Mukhamedvaleev"],
    publishedTime: "2025-04-24",
    modifiedTime: "2025-04-24",
  },
  authors: [
    { name: "Gabriella Reznowski", url: "https://libraries.wsu.edu/" },
    { name: "Emily Cukier", url: "https://libraries.wsu.edu/" },
    { name: "Ruslan Mukhamedvaleev", url: "https://libraries.wsu.edu/" },
  ],
  keywords: [
    "Ukrainian libraries",
    "cultural heritage",
    "war impact",
    "library collections",
    "community support",
    "Ukrainian diaspora",
    "language preservation",
    "refugee support",
  ],
  other: {
    citation_title:
      "Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities",
    citation_author: [
      "Gabriella Reznowski",
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
    ],
    citation_publication_date: "2025-04-24",
    citation_journal_title: "Washington Library Association Conference",
    citation_author_institution: [
      "WSU Libraries",
      "WSU Libraries",
      "Kamiak High School",
    ],
    citation_abstract:
      "This presentation examines the devastating impact of war on Ukrainian libraries and cultural institutions, while exploring strategies for supporting Ukrainian communities through library collections. We document the systematic attacks on Ukrainian cultural heritage and highlight community-driven initiatives to preserve and promote Ukrainian language materials.",
    citation_keywords:
      "Ukrainian libraries, cultural heritage, war impact, library collections",
    citation_language: "en",
    citation_fulltext_html_url:
      "https://www.ukrainianbookproject.com/publications/standing-with-ukraine",
    "dc.title":
      "Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities",
    "dc.creator": [
      "Gabriella Reznowski",
      "Emily Cukier",
      "Ruslan Mukhamedvaleev",
    ],
    "dc.date": "2025-04-24",
    "dc.publisher": "Washington Library Association Conference",
    "dc.type": "Presentation",
    "dc.format": "text/html",
    "dc.language": "en",
    "dc.rights": "All rights reserved",
    "article:published_time": "2025-04-24",
    "article:modified_time": "2025-04-24",
    "article:section": "Research",
    "article:tag": "Ukrainian Libraries",
  },
};

export default function StandingWithUkraine() {
  return (
    <>
      <Heading />

      <main className="w-screen bg-[#f3f1e9] overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <header className="mb-16 text-center">
              <span className={inter.className}>
                <p className="mb-2 text-center text-sm text-yellow-950">
                  <time dateTime="2025-04-24">Published: 2025-04-24 </time>
                  <time dateTime="2025-04-24">Last updated: 2025-04-24</time>
                </p>
              </span>
              <h1 className="text-3xl font-semibold tracking-tight mx-auto text-pretty max-w-xl text-yellow-950 sm:text-4xl mb-6">
                Standing with Ukraine: Building Library Collections to Support
                New Ukrainian Communities
              </h1>
              <div className="flex flex-col items-center gap-4">
                <div className="text-sm text-yellow-950">
                  <span className={inter.className}>
                    <p className="mb-1">Authors:</p>
                    <ul className="list-none flex flex-wrap mx-auto gap-2">
                      <li className="text-center">
                        <span itemProp="author">Gabriella Reznowski</span>
                        <sup>1</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Emily Cukier</span>
                        <sup>1</sup>
                      </li>
                      <li className="text-center">
                        <span itemProp="author">Ruslan Mukhamedvaleev</span>
                        <sup>2</sup>
                      </li>
                    </ul>
                    <div className="mt-4 text-xs text-center mx-auto gap-2">
                      <p>
                        <sup>1</sup>
                        <span itemProp="sourceOrganization">WSU Libraries</span>
                      </p>
                      <p>
                        <sup>2</sup>
                        <span itemProp="sourceOrganization">
                          Kamiak High School
                        </span>
                      </p>
                    </div>
                  </span>
                </div>
              </div>
            </header>

            <article
              className="prose prose-lg max-w-none"
              itemScope
              itemType="http://schema.org/ScholarlyArticle"
            >
              <div className="text-yellow-950/80">
                <span className={inter.className}>
                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Abstract
                    </h2>
                    <div>
                      <p className="mb-8">
                        Libraries in occupied areas have become spaces of
                        “Information Warfare” - where books are deliberately
                        destroyed, particularly books about Ukrainian history.
                        In occupied areas, Russians have repurposed libraries to
                        disseminate propaganda. Today, over 80% of Ukraine's
                        books are published in Kharkiv. The targeting of
                        Ukrainian libraries and publishing houses is indicative
                        of Russia's determination to destroy Ukrainian identity
                        by targeting Ukraine's national treasure: its
                        literature.
                      </p>

                      <p className="mb-8">
                        Libraries have become central to the war effort.
                        Librarians and community members coordinate food
                        packages for the military, make camouflage nets, and
                        coordinate humanitarian aid. In Kyiv, libraries also
                        coordinate the shipment of books to Poland and other
                        areas where refugees are sheltering. Our presentation
                        covers the history of Ukrainian book collections,
                        information destruction in war, and the recovery efforts
                        of today.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/1.png"
                            alt="Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Libraries Under Attack
                    </h2>
                    <div>
                      <p className="mb-8">
                        These photos show libraries in several eastern regions
                        of Ukraine that have been heavily hit by Russian bombs
                        and missiles. While the damage to the physical
                        structures is evident, in many cases, library
                        collections themselves have also been damaged. Some
                        Ukrainian libraries have also experienced occupation by
                        Russian troops who have looted equipment and removed
                        Ukrainian materials.
                      </p>
                      <p className="mb-8">
                        Much of the information about Russia's attacks on
                        Ukrainian libraries has come to us through Ulia Gosart,
                        a librarian at San Jose State University and an advocate
                        for Ukrainian libraries. Ulia highlights the role
                        libraries in unoccupied areas play in welcoming
                        internally displaced people: “In Ukraine, the public
                        library has traditionally been at the heart of
                        community, cultural, and intellectual life. Today,
                        Ukrainian libraries are spaces that symbolize stability
                        while also nourishing the community's spirit.”
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/2.png"
                            alt="Photos of damaged libraries in Ukraine"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <p className="mb-8">
                        While many libraries remain open, in some unoccupied
                        areas, libraries have had to close due to a lack of
                        funding and personnel. Libraries in occupied areas have
                        become spaces of “Information Warfare” - where books are
                        deliberately destroyed, particularly books about
                        Ukrainian history. In occupied areas, Russians have
                        repurposed libraries to disseminate propaganda.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Publishing Under Fire
                    </h2>
                    <div>
                      <p className="mb-8">
                        These photos show a targeted missile attack on the
                        Factor-Druk publishing house on May 27, 2024. The attack
                        left seven employees dead and more than 20 wounded.
                        Kharkiv has historically been the publishing center of
                        Ukraine. Today, over 80% of Ukraine's books are
                        published in Kharkiv. The targeting of Ukrainian
                        libraries and publishing houses is indicative of
                        Russia's determination to destroy Ukrainian identity by
                        targeting Ukraine's national treasure: its literature.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/3.png"
                            alt="Factor-Druk publishing house attack"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Public Libraries in Ukraine
                    </h2>
                    <div>
                      <p className="mb-8">
                        These figures are from the 11th report by the Yaroslav
                        Mudriy National Library of Ukraine, which periodically
                        surveys libraries about the effects of the war. Public
                        libraries are spaces of community and culture, and in
                        smaller towns and villages, they often represent the one
                        center where people can access free Internet. Ukrainians
                        view libraries as central community spaces; this is also
                        the very reason that Russia has placed Ukrainian
                        libraries under attack.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/4.png"
                            alt="Public libraries in Ukraine"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Occupied Territories
                    </h2>
                    <div>
                      <p className="mb-8">
                        In occupied territories, information is used as a tool
                        for Russian propaganda. In an interview with Ulia
                        Gosart, Tetiana Svatula, a librarian at the Kherson
                        Regional Library, explains that the slogan “Russia is
                        Here Forever” is used to undermine Ukrainian identity.
                        Libraries are used to disseminate Russian propaganda,
                        and large shipments of Russian books are delivered to
                        replace Ukrainian works. Libraries are used by Russia as
                        centers for indoctrination, which targets children, in
                        particular. To resist Russian narratives, Ukrainian
                        librarians in unoccupied territories have developed
                        materials to help people recognize false information and
                        identify propaganda.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/5.png"
                            alt="Occupied Territories"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Occupied Territories (cont.)
                    </h2>
                    <div>
                      <p className="mb-8">
                        Libraries are not only being damaged by shelling, but
                        collections are deliberately destroyed using other
                        means. During the occupation of the Kherson region, many
                        strategies were used to undermine libraries, including
                        burning books, urinating on books, and shooting out
                        library windows from the inside. These tactics are used
                        to attack morale through the systematic destruction of
                        Ukraine's literary history and culture.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/6.png"
                            alt="Occupied Territories"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      From Tetiana Svatula's interview with Ulia Gosart
                    </h2>
                    <div>
                      <p className="mb-8">
                        “The War in Ukraine: A Librarian's Perspective.”
                        Published in Public Library Quarterly, 2024.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/7.png"
                            alt="From Tetiana Svatula's interview with Ulia Gosart"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold tracking-tight text-yellow-950 mb-4">
                      Libraries Mobilize
                    </h2>
                    <div>
                      <p className="mb-8">
                        Libraries have become central to the war effort.
                        Librarians and community members coordinate food
                        packages for the military, make camouflage nets, and
                        coordinate humanitarian aid. In Kyiv, libraries also
                        coordinate the shipment of books to Poland and other
                        areas where refugees are sheltering.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/8.png"
                            alt="Libraries mobilizing to support war effort"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Books as a Refuge: Daria Rybalchenko
                    </h2>
                    <div>
                      <p className="mb-8">
                        There are two spheres of advocacy for Ukrainian
                        libraries and books: one sphere addresses the attacks on
                        Ukrainian libraries, and the other addresses supporting
                        Ukrainian readers sheltering abroad.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/9.png"
                            alt="Books as Refuge: Daria Rybalchenko's story"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <p className="mb-8">
                        Ukrainian books represent an important connection to
                        Ukrainian identity and language, while providing readers
                        a chance to temporarily escape the realities of war.
                        Daria Rybalchenko was 16 when Russia attacked her
                        hometown, Stanytsia Luhanska, in eastern Ukraine. That
                        summer, in 2014, she bought a copy of “The Count of
                        Monte Cristo,” the French adventure novel by Alexandre
                        Dumas. She read the book by a solar-powered flashlight
                        while sheltering from the shelling.
                      </p>
                      <p className="mb-8">
                        Daria's copy of the book is now in the War Memory Museum
                        in Sarajevo - the only museum in the world that
                        specifically examines how childhood is affected by war.
                        The museum currently includes over 600 items from
                        Ukrainian children, providing tangible evidence of their
                        experiences.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Ukrainian Speakers in the U.S.
                    </h2>
                    <div>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/10.png"
                            alt="Books as Refuge: Daria Rybalchenko's story"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/11.png"
                            alt="Identifying Communities"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/12.png"
                            alt="Hotspot for Ukrainian Diaspora"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/13.png"
                            alt="Ukrainian speakers in Washington"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/14.png"
                            alt="WA Regions with Most New Ukrainian Speakers from 2022-2023"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Importance of Ukrainian Books to Refugee and Diaspora
                      Communities
                    </h2>
                    <div>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/15.png"
                            alt="Importance of Ukrainian Books to Refugee and Diaspora Communities"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <p className="mb-8">
                        The Ukrainian language has been subjected to a
                        historical continuum of suppression and bans. Ukraine's
                        most famous poet, Taras Shevchenko, published the first
                        book of modern Ukrainian poetry, Kobzar. He was such a
                        formidable force that his poems were published even in
                        Russia; however, Russian and Soviet editions of his
                        poetry were redacted or changed to eliminate Ukrainian
                        identity and nationhood. While this timeline covers up
                        until 1972, today, linguistic oppression of Ukrainians
                        is again occurring under Putin.
                      </p>
                      <p className="mb-8">
                        It is important to note that the Yale Center for Human
                        Rights has documented at least 19,500 cases of Ukrainian
                        children who have been abducted and taken to Russia.
                        These children are put in filtration camps and
                        re-educated as Russian children, or adopted into Russian
                        families. Russia seeks to erase its identity and
                        language.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/16.png"
                            alt="Importance of Ukrainian Books to Refugee and Diaspora Communities"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <p className="mb-8">
                        Throughout the tsarist and soviet periods, the diaspora
                        has played an important role in upholding the language
                        and culture; this continues today as the Ukrainian
                        diaspora engages in advocacy to support the maintenance
                        of the Ukrainian language among refugees who have fled
                        the war. This poem by Virlana Tkacz highlights her
                        experience as a Ukrainian learner in the diaspora during
                        the Soviet period, underscoring the freedom to speak and
                        learn Ukrainian in the US, while it was suppressed in
                        her homeland. The diaspora has a great desire to uphold
                        the values of their language by ensuring that Ukrainian
                        children have access to the Ukrainian language and
                        reading materials. These materials also provide comfort
                        and support to the community, including, in particular,
                        to children and the elderly.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Community Engagement
                    </h2>
                    <div>
                      <p className="mb-8">
                        In June 2022, the Portland-based Ukrainian American
                        magazine Kanon published a profile on community member
                        Kristine Mushkevych's efforts in advocating for
                        Ukrainian language books. The article described the
                        importance of Ukrainian language collections to the
                        community and provides advice on methods to work with
                        and engage local libraries. Mushkevych also shares tips
                        and talking points to guide advocacy, and a sample
                        materials request letter. This article speaks to the
                        efforts of the Ukrainian community in their desire to
                        work with libraries and to help Ukrainian readers access
                        books in their language.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/17.png"
                            alt="Community Engagement"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Community Self-Advocacy
                    </h2>
                    <div>
                      <p className="mb-8">
                        When Ukrainian community members in King County were
                        still finding a path to work with their local libraries,
                        they set up their own book exchange system using QR
                        codes to “check out” books. Tabling at community events,
                        they promoted the program and developed their own
                        community-driven library.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/18.png"
                            alt="Community Self-Advocacy"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Ukrainians Celebrate Book Acquisitions
                    </h2>
                    <div>
                      <p className="mb-8">
                        Examples from social media groups where the Ukrainian
                        community shares information about recent library
                        acquisitions and encourages one another to advocate for
                        Ukrainian books.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/19.png"
                            alt="Ukrainians Celebrate Book Acquisitions"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/20.png"
                            alt="Ukrainians Celebrate Book Acquisitions"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Community-Driven Initiatives
                    </h2>
                    <div>
                      <p className="mb-4">
                        Community member Lyuba Uzik started her own book club
                        and uses the platform to share information about
                        Ukrainian book acquisitions in communities around
                        Seattle.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/21.png"
                            alt="Lovage Book Club and community initiatives"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                      <p className="mb-8 italic">
                        Translations:
                        <br />
                        <br />
                        Are there some Ukrainian books and resources for
                        children and young adults in libraries?
                        <br />
                        <br />
                        Tacoma Public Library has a World Language Collection
                        with 156 print and electronic materials in Ukrainian.
                        <br />
                        <br />
                        The Seattle Public Library has 920 print, audio, and
                        electronic books, films, and materials on DVD and CD.
                        <br />
                        <br />
                        The Mount Vernon Library Commons has also increased its
                        holdings of books and educational materials in the
                        Ukrainian language. At the present time, there are more
                        than 45 books available.
                        <br />
                        <br />
                        King County Library System: Ukrainian books are present
                        on the shelves at the following locations:
                        Algona-Pacific, Bellevue, Federal Way, Federal Way
                        320th, Kenmore, Kent, Outreach, Redmond, and Renton.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Library Barriers to Ukrainian Book Acquisition
                    </h2>
                    <div>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/22.png"
                            alt="Library Barriers to Ukrainian Book Acquisition"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Overcoming Barriers to Collecting
                    </h2>
                    <div>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/24.png"
                            alt="Overcoming Barriers to Collecting"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>

                      <p className="mb-8">
                        Ukrainian publishing remains robust, despite the
                        dangerous conditions that publishers operate under.
                        Ukrainian bookstores have increased in number as
                        interest in Ukrainian books has soared. This slide shows
                        the rebuilt Factor Druk Publishing House. Included is
                        also a sample page from the Ranok catalog that provides
                        English descriptions in an effort to provide selection
                        tools for English speakers.
                      </p>

                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/25.png"
                            alt="Ukrainian Publishing Remains Strong"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Work with Community Partners
                    </h2>
                    <div>
                      <p className="mb-8">
                        The Ukrainian community has developed successful
                        collaborative partnerships with libraries, such as the
                        Camas Public Library and the King County Library System.
                        Ukrainian community members are eager to share
                        information about the war and its effects on libraries,
                        writers, and publishers. The Lost Horse Press
                        dual-language Ukrainian poetry series also offers
                        opportunities for bilingual programming in Ukrainian and
                        English.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/26.png"
                            alt="Work with Community Partners"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Choosing and Ordering Books
                    </h2>
                    <div>
                      <div className="mb-8">
                        The Ukraine-based non-governmental agency Library
                        Country{" "}
                        <a
                          href="https://livelibrary.com.ua/en/"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          target="_blank"
                        >
                          (Livelibrary - Благодійний фонд "Бібліотечна країна")
                        </a>{" "}
                        has worked to facilitate the selection and shipment of
                        books to Ukrainians sheltering in Europe, and has also
                        coordinated shipments to libraries in the United States.
                        The Ukrainian National Women's League of America has
                        also developed booklists to help with book selection.
                        The following library guide has links to many selection
                        tools, booklists, and resources:{" "}
                        <a
                          href="https://libguides.libraries.wsu.edu/ukrainianlanguage"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800"
                          target="_blank"
                        >
                          https://libguides.libraries.wsu.edu/ukrainianlanguage
                        </a>
                      </div>

                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/27.png"
                            alt="Resources for building Ukrainian collections"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Sokolya.com
                    </h2>
                    <div>
                      <p className="mb-8">
                        Ukrainian-owned online bookstore, Sokolya.com, was
                        founded by Oksana Hluska in response to community
                        requests for Ukrainian language materials. Sokolya
                        regularly receives a broad range of new books by
                        best-selling authors from a variety of Ukrainian
                        publishers. The vendor can also select titles based on a
                        library's selection profile.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/28.png"
                            alt="Sokolya.com"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Overcoming Local Resistance from Libraries
                    </h2>
                    <div>
                      <p className="mb-8">
                        Libraries are sometimes hesitant to collect materials in
                        languages that they have not collected in previously.
                        Some libraries are also hesitant to develop smaller
                        collections and prefer long-term commitments to
                        sustainable, large collections in a given language area.
                        However, every language collection starts somewhere.
                        Even a small collection can speak volumes to a language
                        community and demonstrate that their language is valued
                        within the broader context of the library and its
                        services. The map visualization can be useful for
                        identifying other libraries that have established
                        collections of Ukrainian books that may be able to
                        provide guidance and advice.
                      </p>
                      <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                        <a
                          href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <img
                            src="/Slides2/29.png"
                            alt="Overcoming Local Resistance from Libraries"
                            className="rounded-lg border border-yellow-950/50"
                          />
                        </a>
                      </figure>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-yellow-950 mb-4">
                      Methodology + State of Collecting
                    </h2>
                    <p className="mb-8">
                      The rest of the presentation is available on the{" "}
                      <a
                        href="https://www.canva.com/design/DAGjda5fGq0/_NAmfUtU_0wnxSv9OzO30g/view?utm_content=DAGjda5fGq0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8a8fbc26cd"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800"
                        target="_blank"
                      >
                        presentation website
                      </a>
                      . This includes the methodology and state of collecting
                      that we shared in our earlier presentation, presented at
                      the 2024 ACH Annual Conference.
                    </p>
                    <figure className="mb-8 p-2 border border-yellow-950/50 rounded-xl bg-[#d6d3c8]">
                      <img
                        src="/StandingWith.png"
                        alt="Title Slide | Standing with Ukraine: Building Library Collections to Support New Ukrainian Communities"
                        className="rounded-lg border border-yellow-950/50"
                      />
                    </figure>
                  </section>
                </span>
              </div>
            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
