import { AiOutlineTwitter } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

var year = new Date();

export default function Content() {
  return (
    <div className="content-container">
      <div className="be-a-buddy-container">
        <div className="heading">Be a Buddy</div>
        <div className="be-a-buddy-content">
          <div className="be-a-buddy-column">
            <img className="buddy1" src="./border.png"></img>
            <div>Trade items within an internal marketplace or P2P</div>
          </div>

          <div className="be-a-buddy-column">
            <img className="buddy2" src="./border.png"></img>
            <div>Craft using earned or staked materials and tokens</div>
          </div>

          <div className="be-a-buddy-column">
            <img className="buddy3" src="./border.png"></img>
            <div>Stake for $Budcoin which is paired with $magic</div>
          </div>

          <div className="be-a-buddy-column">
            <img className="buddy4" src="./border.png"></img>
            <div>Gain access to earn in our Minecraft server</div>
          </div>
        </div>
      </div>
      <div className="why-free-mint-container">
        <div className="heading">Why a Free mint?</div>
        <div className="why-free-mint-row">
          <div className="why-free-mint-column why-free-mint-text">
            <div className="subheading">RAISING MONEY</div>
            <div>
              <p>
                In NFT&apos;s some of the best and honest communities are through
                free mints. Some of such are Smol Brains, Critterz, NFT Worlds,
                BattleFly, Crypto Punks, and so on. We plan on generating our
                project funds through the secondary marketplace, where we will
                collect 5-10% of royalties.
              </p>
              <p>
                We plan to use this money to hire full-time staff that range
                from senior developers, product managers, to web designers, and
                so on.
              </p>
              <p>
                We want this project to always be building so raising enough
                money to hire skillful people full-time will be crucial. We will
                offer hourly wage positions so all work done is paid fairly.
              </p>
            </div>
          </div>
          <div className="why-free-mint-column why-free-mint-img">
            <img className="buddy4" src="./border.png"></img>
          </div>
        </div>

        <div className="why-free-mint-row row2">
          <div className="why-free-mint-column why-free-mint-text">
            <div className="subheading">BUILDING TRUST</div>
            <div>
              <p>
                Many projects will charge a mint fee, acquiring tons of cash,
                then leaving the community to worry about their money. Often
                poorly updating their community, most of the time it&apos;s just poor
                communication.
              </p>
              <p>
                What is raised initially will determine how much faith the
                community has put into us. Regardless of the amount raised, we
                will follow through with our planning and will be working with
                our community to build what we envision together.
              </p>
            </div>
          </div>
          <div className="why-free-mint-column why-free-mint-img">
            <img className="buddy3" src="./border.png"></img>
          </div>
        </div>
      </div>

      <div className="faq-container">
        <div className="heading">Frequently asked questions</div>
        <div className="faq-content">
          <div className="pixel-borders pixel-box--primary">
            <div className="subheading">WHAT IS BUDDY WORLD?</div>
            <div className="body">
              BuddyWorld is a Minecraft server with a RPG play-style. Both free
              players and token holders can play together. Host events, go on
              quests, raids, harvest, story-tell, together. Find your
              profression and start building your story. BuddyWorld will have
              seamless integrations for all projects to add quests, cities,
              items, etc.
            </div>
          </div>

          <div className="pixel-borders pixel-box--primary">
            <div className="subheading">HOW DOES CUSTOMIZATION WORK?</div>
            <div className="body">
              Smol Buddies are customizable NFT&apos;s that can mixed and matched
              through changing head, body, and bottom accessories Get new
              accessories through playing in-game, or staking your Buddy for
              $BUDCOIN to open lootboxes to unlock new items. You can even
              dismantle accessories and craft new items and lootboxes.
            </div>
          </div>

          <div className="pixel-borders pixel-box--primary">
            <div className="subheading">HOW DOES STAKING WORK?</div>
            <div className="body">
              Smol Buddies are able to be staked for those who can&apos;t vest to
              time required to play. Furthermore, for every Buddy you hold (max
              8) you will recieve a corresponding staking multiplier. Use your
              earned $BUDCOIN to purchase in-game land, assets, items, or unlock
              new accessories for your Buddies!
            </div>
          </div>
        </div>
      </div>

      <div className="meet-the-team-container">
        <div className="heading">Meet the team</div>
        <div className="meet-the-team-content">
          <div className="meet-the-team-column">
            <img className="buddy3" src="./border.png"></img>
            <div className="name">Ghosthunt</div>
            <div className="title">Artist</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy2" src="./border.png"></img>
            <div className="name">Pedram</div>
            <div className="title">Artist</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy4" src="./border.png"></img>
            <div className="name">Samrath</div>
            <div className="title">Tech Lead</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy1" src="./border.png"></img>
            <div className="name">TreeDeez</div>
            <div className="title">Smart Contract and General Developer</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy1" src="./border.png"></img>
            <div className="name">Donauts</div>
            <div className="title">Project Manager</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy1" src="./border.png"></img>
            <div className="name">Owrange</div>
            <div className="title">Community Manager</div>
          </div>

          <div className="meet-the-team-column">
            <img className="buddy1" src="./border.png"></img>
            <div className="name">Astris</div>
            <div className="title">Web Developer</div>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footer-links">
          <AiOutlineTwitter size={24}></AiOutlineTwitter>
          <FaDiscord size={24}></FaDiscord>
        </div>

        <div className="footer-text">© SMOL BUDDIES, {year.getFullYear()}</div>
      </div>
    </div>
  );
}
