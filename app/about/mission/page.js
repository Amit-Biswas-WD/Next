import Button from "@/app/components/Button";
import Image from "next/image";

import me from "@/public/me2.png";

export default function Mission() {
  return (
    <main className="p-4">
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non
        quis exercitationem culpa nesciunt nihil aut nostrum explicabo
        reprehenderit optio amet ab temporibus asperiores quasi cupiditate.
        Voluptatum ducimus voluptates voluptas? This is Mission Page
      </div>
      <div className="w-[400px]">
        <Image placeholder="blur" src={me} alt="me 2" />
      </div>
      <Button />
    </main>
  );
}
