import Logo from "@/assets/Logo.png";

type Props = {};

const index = (props: Props) => {
  return (
    <footer className="mt-8 bg-primery-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A ipsa
            impedit dicta optio possimus reiciendis nesciunt debitis
            necessitatibus eos. Illum.
          </p>
          <p>Evogym All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4  md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="mt-5">Lorem ipsum dolor sit amet.</p>
          <p className="mt-2">Lorem ipsum dolor sit amet.</p>
          <p className="mt-2">
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </p>
        </div>
        <div className="mt-10">
          <h4 className="font-bold">Contact Us</h4>
          <p className="mt-5">Lorem ipsum dolor sit.</p>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum,
            ducimus ratione expedita a explicabo sunt inventore, veritatis
            delectus incidunt minima aliquam quia ad ipsum dolorum. Sed laborum
            doloremque eum provident.
          </p>
          <p className="mt-3">(333)425-6285</p>
        </div>
      </div>
    </footer>
  );
};

export default index;
