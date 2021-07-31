import React from 'react';
import './style.css';

export default function App() {
  return (
    <div contentEditable="true">
      <h1>Hello</h1>
      <nav>
        <a href="#page1">page 1</a>
        <a href="#page2">page 2</a>
      </nav>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        rhoncus velit. Cras commodo erat sed leo commodo, vel facilisis ligula
        tempor. Ut ac nibh eget est lacinia sagittis. Fusce vehicula est sed
        justo pulvinar mattis. Phasellus sagittis pellentesque consectetur.
        Praesent elementum ligula et neque consectetur, vel fermentum quam
        finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <form id="formularz">
        <input id="aktywnyKrok1" type="checkbox" name="aktywnyKrok" value="1" />
        <fieldset>
          <legend>Krok 1</legend>
          <label for="aktywnyKrok2">Nastepny</label>
        </fieldset>
        <input id="aktywnyKrok2" type="checkbox" name="aktywnyKrok" value="2" />
        <fieldset>
          <legend>Krok 2</legend>
          <label for="aktywnyKrok3">Nastepny</label>
        </fieldset>
        <input id="aktywnyKrok3" type="checkbox" name="aktywnyKrok" value="3" />
        <fieldset>
          <legend>Krok 3</legend>
        </fieldset>
      </form>

      <section id="page1">
        <h2>Page 1</h2>
        <a href="#">zamknij</a>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis
        rhoncus velit. Cras commodo erat sed leo commodo, vel facilisis ligula
        tempor. Ut ac nibh eget est lacinia sagittis. Fusce vehicula est sed
        justo pulvinar mattis. Phasellus sagittis pellentesque consectetur.
        Praesent elementum ligula et neque consectetur, vel fermentum quam
        finibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
        arcu nulla, commodo imperdiet auctor nec, accumsan eget neque. Etiam
        vulputate gravida lorem, vel volutpat leo. Integer vel quam et ipsum
        varius vestibulum a sed eros. Nam id feugiat odio, et maximus mauris. In
        dictum eros eros, eu facilisis ipsum facilisis quis. Sed rhoncus blandit
        augue id porttitor. Proin at risus non elit consequat tempus. Nunc sed
        sem et tellus interdum volutpat. Mauris vehicula massa eu justo
        interdum, quis posuere mi scelerisque. Sed iaculis vulputate quam eu
        vulputate. Vivamus dui justo, lobortis non convallis eget, pharetra quis
        eros. Nulla facilisi. Integer et rhoncus sapien. Etiam facilisis
        pharetra placerat. Vestibulum sit amet leo sapien. Duis ultricies urna
        nisi. Nam eget quam scelerisque, maximus nibh eget, bibendum ex.
        Praesent sed diam id orci bibendum luctus eget in lectus. Phasellus
        consequat lorem sed sapien lacinia, eget condimentum nulla consectetur.
        Pellentesque gravida condimentum varius. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; In non elit a
        turpis viverra feugiat sit amet in turpis.
      </section>
      <section id="page2">
        <h2>Page 2</h2>
        <a href="#">zamknij</a>
        Maecenas in consectetur erat. Sed laoreet aliquet accumsan. Fusce dictum
        enim non sem fringilla interdum. Donec suscipit sollicitudin justo,
        tempor fermentum lacus egestas et. Vestibulum nibh odio, placerat eget
        tellus vel, laoreet interdum sem. Praesent posuere dapibus dictum. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus
        elit, tempor eu nisi quis, pulvinar ullamcorper nulla. Quisque quis
        velit at sapien placerat laoreet vitae non sem. Aenean quis porttitor
        lorem, in congue nunc. Maecenas venenatis neque sit amet est mollis
        cursus. Sed porta volutpat eleifend. Fusce nec volutpat ex. Ut tempus
        purus a porta interdum. Etiam rhoncus mauris risus, vel congue dolor
        interdum ut. Nunc luctus sed est id placerat. Duis tellus mi, ultricies
        vitae lectus euismod, sodales fermentum diam. Nulla sit amet felis sed
        leo rutrum sagittis at sed sapien. Morbi eget dictum mi, quis volutpat
        leo. In eleifend sed elit nec viverra. Duis dignissim ligula vel arcu
        pellentesque gravida vel at tortor. Sed nec vehicula tellus. Ut
        fringilla ante feugiat, convallis erat quis, aliquam quam. Etiam blandit
        mauris ac dolor viverra iaculis. Morbi pellentesque finibus mi, a
        sodales elit laoreet eget. Suspendisse sit amet luctus nibh.
      </section>
    </div>
  );
}
