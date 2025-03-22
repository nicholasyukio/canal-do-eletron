import Image from "next/image";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Section from '@/components/ui/section';
import Quote from '@/components/ui/quote';
import ServicesSection from '@/components/ui/ServicesSection';

const servicesData = [
  {
    title: 'Custom Website Design',
    description:
      'Our team crafts stunning custom designs that reflect your brand\'s identity, creating a seamless user experience.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'We build secure, scalable, and user-friendly e-commerce platforms that drive sales and growth for your business.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'We build secure, scalable, and user-friendly e-commerce platforms that drive sales and growth for your business.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'We build secure, scalable, and user-friendly e-commerce platforms that drive sales and growth for your business.',
  },
  {
    title: 'Custom Website Design',
    description:
      'Our team crafts stunning custom designs that reflect your brand\'s identity, creating a seamless user experience.',
  },
  {
    title: 'E-Commerce Solutions',
    description:
      'We build secure, scalable, and user-friendly e-commerce platforms that drive sales and growth for your business.',
  },
  // Add more services as needed
];

export default function Home() {
  return (
    <>
    <Header />
    <div className="grid grid-rows-[10px_1fr_10px] items-center justify-items-center min-h-screen p-4 pb-16 gap-8 sm:p-8 font-[family-name:var(--font-geist-sans)] bg-blue-100">
      
      <main className="flex flex-col gap-[6px] row-start-2 items-center sm:items-start">
      <Section
        id="card"
        title="Criamos o seu cartão de visitas na internet"
        description="Na era da internet, não basta entregar um cartão de papel e esperar a pessoa te contratar depois. Seu futuro cliente, paciente ou aluno vai querer ver alguma coisa na internet sobre você e seu trabalho. As redes sociais ajudam, mas é um site próprio que as pessoas seriamente interessadas vão gostar de ver antes de te contratar. Conte com o nosso trabalho para melhorar a sua divulgação através da internet."
        imageSrc="/images/professional_website.jpg"
      />
      <Section
        id="engineers"
        title="Para engenheiros"
        description="Se você é engenheiro (eletricista, civil, etc) e presta serviços de instalações elétricas, cálculos estruturais, laudos técnicos, projetos de automação ou qualquer outro tipo de projeto, você pode se beneficiar em ter um site detalhando os seus serviços para obter mais clientes e se destacar no mercado. A forma mais profissional de um portifólio atualmente é um site em que as pessoas podem conhecer o seu trabalho e solicitar um orçamento."
        imageSrc="/images/electric_engineer.jpg"
      />
      <Section
        id="photographers"
        title="Para fotógrafos"
        description="Para ser um fotógrafo profissional, você não pode apenas divulgar o seu trabalho nas redes sociais. Praticamente todo mundo está nas redes sociais, então você é só mais um lá. Mas quando, além de um Instagram arrumado, você tem um site mostrando seu trabalho como fotógrafo em diversos eventos, você passa uma seriedade muito maior. Quer ser mais valorizado na sua profissão? Conte conosco."
        imageSrc="/images/photographer.jpg"
      />
      <Section
        id="designers"
        title="Para designers"
        description="Imagine você ter um site com todos os seus melhores trabalhos de design gráficos já feitos? É uma impressão para o cliente é muito mais profissional. Você pode destacar diferentes habilidades que você tem, os trabalhos que você faz, tudo isso em um lugar com a sua cara, longe do ruído e das discussões das redes sociais. Então quando alguém te perguntar do que você já fez, você compartilha o link do seu site e conquista mais clientes."
        imageSrc="/images/graphic_designer.webp"
      />
      <Section
        id="lawyers"
        title="Para advogados"
        description="Não basta mais ter uma placa na frente da sua casa dizendo que você é advogado. Hoje em dia você precisa estar na internet. As redes sociais ajudam, mas são ambientes cheios de palpites e discussões. As pessoas podem te conhecer por lá, mas quem está procurando por assessoria jurídica vai sentir firmeza no seu trabalho quando acessar o seu site. No seu site, você mostra o seu conhecimento, experiência e serviços e recebe mais contatos."
        imageSrc="/images/lawyer.jpg"
      />
      <Section
        id="health"
        title="Para profissionais da saúde"
        description="Médicos, dentistas e outros profissionais da saúde que têm seu próprio consultório podem também se beneficiar com um site próprio. Após algumas experiências frustrantes, muitas pessoas não confiam em marcar consulta com um médico aleatório. Mas se a pessoa entra no seu site e percebe o seu conhecimento na área, ela tem mais confiança que com você vai receber o tratamento que ela merece."
        imageSrc="/images/clinician.jpg"
      />
      <Section
        id="you"
        title="Para você"
        description="Vários outros profissionais também se beneficiariam de um site próprio, como nutricionistas, terapeutas, arquitetos, gestores de tráfego, social media, tradutores, professores particulares, personal trainers, para citar apenas alguns. Esteja pronto para quando alguém disser que deseja conhecer o seu trabalho e não perder o cliente, paciente ou aluno. O melhor é: a maioria dos seus concorrentes não têm site, então você estará na frente quando mostrar o seu."
        imageSrc="/images/any_professional.jpg"
      />
      <Section
        id="leavewithus"
        title="Foque no seu trabalho e deixe o resto conosco"
        description="Para quem não entende do assunto, tentar criar o próprio site pode se tornar um processo demorado, frustrante e, muitas vezes, acabar não valendo a pena. Além disso, as plataformas de 'faça você mesmo' oferecem opções limitadas, o que pode resultar em um site pouco personalizado e difícil de gerenciar. Nós cuidamos da sua presença online para que você possa se concentrar no crescimento da sua empresa."
        imageSrc="/images/professional_designer.webp"
      />
      <Quote />
      <Section
        id="about"
        title="Sobre nós"
        description="Aqui no Canal do Elétron temos profissionais capacitados em desenvolvimento web com as tecnologias mais modernas, versáteis e avançadas. Hospedagem, infraestrutura de nuvem, DNS, linguagens de programação, front-end, back-end, etc: você não precisa se preocupar com nada disso. Cuidamos de tudo para você.
        Eu, Nicholas Yukio, sou engenheiro e tenho experiência com programação e desenvolvimento web, e coordeno e desenvolvo os sites dos clientes com o auxílio de 
        outros profissionais específicos sempre que necessário."
        imageSrc="/images/nova_foto_linkedin.jpg"
      />
      </main>
      <Footer />
    </div>
    </>
  );
}
