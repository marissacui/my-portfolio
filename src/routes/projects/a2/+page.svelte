<svelte:head>
  <title>Exploratory Data Analysis</title>
</svelte:head>

<header>
    <h1>
        <small>Assignment 2</small>
        Exploratory Data Analysis
    </h1>

    <p>
        <strong>Marissa Cui</strong> — <em>marissac@mit.edu</em>
    </p>
</header>
<main>
    <section>
        <article>
            <h2>Subtheme: Speculation</h2>

            <h3>Overall Analysis Questions</h3>
            <ol>
                <li>
                    <b>How do areas with higher investor activity relate to rates of tenant displacement or eviction filings over time?</b>
                    I’m interested in the triggers of tenant displacement and how it reshapes the neighborhood. It would be interesting to look at investor activity in various dimensions: number of purchases, flips, time it takes to flip, price difference between each sale, type of investor/buyer, and many more etc. All these dimensions have the potential to meaningfully impact the magnitude of displacement. I really enjoyed how the <a href="https://www.propublica.org/article/when-private-equity-becomes-your-landlord" target="_blank">ProPublica article</a> highlighted specific stories of renters, following their displacement from San Francisco to neighboring suburbs. This definitely resonates when I think about how much our rent went up in Manhattan right before we moved to Cambridge (by $1,000!) and how moving back after school definitely means we’ll be living in Brooklyn if we want a similar standard. By examining these metrics alongside displacement data, we could potentially map broader migration patterns of renters and better understand the cascading effects of investment patterns on community stability.
                </li>
                <li>
                    <b>What demographic and socioeconomic patterns emerge among displaced families?</b>
                    Building on the human narratives highlighted in the ProPublica article, I aim to develop a more comprehensive understanding of displacement's impact through aggregate data. A better understanding of the demographics, occupation, age, years lived in Boston, among other characteristics, would help humanize the stories, allowing us to better contextualize individual stories within broader community patterns. Combining this quantitative approach with the <a href="https://www.propublica.org/article/when-private-equity-becomes-your-landlord">ProPublica article’s</a> qualitative accounts could be a powerful way to show which communities bear the greatest burden and potentially revealing systemic patterns.
                </li>
                <li>
                    <b>How does absentee ownership manifest by neighborhood or by property value?</b>
                    While the <a href="https://apps.bostonglobe.com/2023/10/special-projects/spotlight-boston-housing/boston-towers-of-wealth/" target="_blank">Boston Globe article</a> focused primarily on absentee ownership in luxury developments, I'm interested in examining if this extends beyond high-end properties. I want to find ways to further quantify the impact of this phenomenon and get a sense of its scale (both in terms of absolute number and monetary value), prevalence (is it really only in high-luxury buildings), and impact (how much tax revenue is generated). This exploratory analysis might reveal unexpected patterns and generate new questions about how vacant properties affect Boston's housing ecosystem.
                </li>
            </ol>
        </article>
    </section>

    <section>
        <h2>Discoveries & Insights</h2>

        <figure>
            <h3>Understanding the variables</h3>
            <img src="../images/a2/fig1.png" alt="" />
            <figcaption>
                As a first step, I looked through the tabular data without any visualizations to get familiar with the data types. The first thing I noticed was the large range of `proptypes` spanned across residential, commercial, and public use. For this analysis, I focused on residential real estate by selecting specific property types that represent spaces where people live: apartments (APT), single-family homes (R1F), two-family homes (R2F), three-family homes (R3F), condominiums (RCD), and foreclosed properties (REO). These categories capture apartments, single-family, multi-family, condos, and foreclosures—basically all the places people actually call “home”. I also removed one outlier property classified as R25, as it was a single instance and not a flipped property, which helped streamline subsequent visualizations without losing meaningful information about residential housing patterns.
            </figcaption>
        </figure>

        <figure>
            <h3>Price distribution</h3>
            <img src="../images/a2/fig2.png" alt="" />
            <figcaption>
                Next, I visualized the price distribution to reveal an extreme right skew in residential property sales. While most transactions fell within a more modest range, the distribution featured a remarkable long tail extending beyond $30 million. While I suspected that some of the high value properties were commercial properties that might’ve slipped through, a few Google searches revealed that many were in fact residential.
            </figcaption>
        </figure>

        <figure>
            <h3>Price distribution excluding outliers</h3>
            <img src="../images/a2/fig3.png" alt="" />
            <figcaption>
                Given that my research questions focus on understanding tenant displacement, I decided to exclude the top 5% of properties by price (leaving us to look at properties at $3.8M and below) to further streamline the data and better focus on the market segments where displacement most likely occurs. While ultra-luxury properties are an important part of Boston's real estate landscape and may have interactions with the rest of the market, I believe excluding them from this part of the analysis is justified. This filtering approach allows for a more targeted analysis of the housing market segment where investment patterns most directly impact community stability and affordability.

                In my initial look at the tabular data, I also noticed a large handful of properties with “price = 1”. I believe these might be non-arm's length transactions, referring to transfers between family members or from a parent company to a subsidiary. I decided to exclude them as well.
                
                I will be using these filters for the rest of the analysis unless otherwise indicated.
            </figcaption>
        </figure>

        <figure>
            <h3>Property type distribution</h3>
            <img src="../images/a2/fig4.png" alt="" />
            <figcaption>
                To dig deeper on the composition of Boston's real estate market, I examined the distribution of transactions across property types. The visualization revealed a striking concentration in the condominium (RCD) sector, which accounted for 94.73% of all transactions. Single-family homes (R1F) represented the next largest category at just 2.17% of sales. This overwhelming predominance of condo transactions reflects Boston's dense urban character and suggests that changes in the condominium market could have outsized effects on residential displacement patterns. 
            </figcaption>
        </figure>

        <figure>
            <h3>Flip rates by property type</h3>
            <img src="../images/a2/fig5.png" alt="" />
            <figcaption>
                Given that residential condos (RCD) dominated the transaction volume, I investigated whether this concentration might be driven by a disproportionate amount of flipping activity. However, analyzing the percentage of flips within each property type revealed surprisingly consistent proportions across all residential categories, ranging from 3.08% to 4.45%. Notably, the flip rate for RCD’s fell in the middle of this range, suggesting that the high volume of condo transactions may reflect Boston's housing stock composition rather than targeted activity.
            </figcaption>
        </figure>

        <figure>
            <h3>Where are the transactions being flipped?</h3>
            <img src="../images/a2/fig6a.png" alt="" />
            <img src="../images/a2/fig6b.png" alt="" />
            <figcaption>
                To understand the spatial patterns, I mapped the transactions to contrast flip_ind = 1 vs flip_ind = 0. The visualization revealed that flipped properties were notably concentrated in urban, city center areas, suggesting investors particularly target these central locations for short-term purchases and resales. However, no immediate patterns emerge once we zoom in further to observe just these areas. This suggests that while investors show a preference for central locations, their specific property selections within these areas may not be driven by systematic targeting of particular blocks or sub-neighborhoods.
            </figcaption>
        </figure>

        <figure>
            <h3>Isolating each property type</h3>
            <img src="../images/a2/fig7.png" alt="" />
            <figcaption>
                Examining the distribution of flips across property types revealed some patterns in investor targeting strategies:
                <ul>
                    <li>APT flips are clustered mostly in Boston's downtown and Beacon Hill areas</li>
                    <li>Single-family (R1F) and two-family (R2F) home flips showed similar geographic concentration, primarily appearing in the prestigious and more historic neighborhoods of Beacon Hill, Back Bay, and South End.</li>
                    <li>Condo (RCD) flips displayed a much more dispersed pattern across the city, indicating that condo flipping operates under different dynamics and opportunities city-wide.</li>
                    <li>The near-absence of foreclosure (REO) flips, with only one observed, suggests that despite their potential for profit, foreclosed properties may not be playing a significant role in Boston's flipping landscape.</li>
                </ul>
                While patterns certainly emerge from observing property types side by side, we can also notice that higher flips roughly correlate with a higher density of sales in general. A more insightful analysis might want to look at the flip-to-non-flip ratios instead of density.
            </figcaption>
        </figure>
    </section>

    <section>
        <h2>Summary</h2>

        <p>In exploring speculation within Boston's housing market, I began with three key questions centered on investor activity, displacement, and absentee ownership. After filtering out non-residential properties, ultra-luxury outliers, and nominal $1 transfers, I found that condominiums (RCD) overwhelmingly dominate the residential transaction volume (94.73% of sales), though flipping rates remained surprisingly consistent across property types (3.08%–4.45%). Mapping revealed flips concentrated in central urban neighborhoods, with distinct patterns by property type—apartment flips clustered downtown and in Beacon Hill, while single- and two-family flips appeared in historic high-end areas. While this analysis provided valuable insights into property sale patterns, limitations in the focus of my data prevented deeper investigation of tenant displacement and demographic impacts, key aspects of my initial research questions that would benefit from additional data sources in future analyses.</p>
    </section>
</main>