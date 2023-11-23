<script>
  import Contact from "../lib/components/Contact.svelte";

  import Accolades from "../lib/components/Accolades.svelte";
  import Projects from "../lib/components/Projects.svelte";
  import Education from "../lib/components/Education.svelte";
  import Experience from "../lib/components/Experience.svelte";
  import TechStack from "../lib/components/TechStack.svelte";
  import Description from "../lib/components/Description.svelte";
  import Introduction from "../lib/components/Introduction.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
</script>

<Header />
<Introduction />
<Description />
<TechStack />
<Experience />
<Education />
<Projects />
<Accolades />
<Contact />

<Footer />
