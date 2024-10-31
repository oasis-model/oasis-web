import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon, ArrowTopRightIcon } from "@radix-ui/react-icons";


export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col gap-8  p-8 pb-20 gap-16 sm:p-20 md:px-48 ">
        <div className="flex flex-col items-center gap-8">
        <h3>October 31, 2024</h3>
        <h1 className="text-5xl font-bold text-center">Oasis: A Universe in a Transformer</h1>
        <h2 className="mt-[-20px] text-center mb-8"><a className="underline" href="https://decart.ai">Decart</a>, <a className="underline" href="https://etched.ai">Etched</a></h2>
        <video src="/wide1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />

        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2">
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-14 sm:h-16 px-4 sm:px-5 w-56"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon className="w-4 h-4" />
            <b>
            Play demo
            </b>
          </a>
          </div>
        <div className="flex gap-4 flex-col sm:flex-row w-full items-center justify-center mt-[-14px]">

        <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowTopRightIcon className="w-4 h-4" />
            Decart Blog
          </a>
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            View code
          </a>

          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowTopRightIcon className="w-4 h-4" />
            Etched Blog
          </a>
        </div>
        </div>
        <div className="flex flex-col gap-4 px-0 lg:px-32">
        <p className="text-justify leading-relaxed">We&apos;re excited to announce Oasis, the first realtime AI open-world model. It&apos;s a video game, but entirely generated by AI. Oasis is the first step in our research towards more complex interactive worlds. </p>

        <p className="text-justify leading-relaxed">Oasis takes in user keyboard input and generates gameplay in real-time - including physics, game rules and graphics. You can move around, jump, pick up items, and break blocks. There is no game engine behind any of this, just a foundation model.</p>

        <p className="text-justify leading-relaxed">We can capture a complete universe with consistent physical laws in the weights of a transformer. Fast transformer inference unlocks video as a usable interface. We&apos;re releasing the code, the weights of a 500M parameter model, and a live playable demo of a larger checkpoint.</p>

        <h2 className="text-2xl font-bold text-center mt-8">Gameplay Results</h2>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{
            loop: true
          }}>
            <CarouselContent>
              {[
                {src: "/placing_4_fences.webp", caption: "Placing non-cube blocks"},
                {src: "/torch_becomes_dark.webp", caption: "Model understands lighting physics"},
                {src: "/inventory_and_changing_hands.webp", caption: "Real-time block manipulation"},
                {src: "/2.webp", caption: "Interactive crafting system"},
                {src: "/3.webp", caption: "AI-driven NPCs and wildlife"}
              ].map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                  <div className="flex flex-col items-center justify-center">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={700}
                      height={300}
                      className="object-cover"
                    />
                    <p className="text-sm text-center p-2">{item.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>

        <p className="text-justify leading-relaxed">Our model even understands complex game mechanics, such as crafting, and NPCs ADD MORE EXAMPLES.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{
            loop: true
          }}>
            <CarouselContent>
              {["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp"].map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        width={700}
                        height={300}
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
          
        <h2 className="text-2xl font-bold text-center mt-8">Architecture</h2>

        <p className="text-justify leading-relaxed">The model is composed of two parts - a spatial autoencoder, and a latent diffusion backbone. Both are Transformer-based - the autoencoder is based on ViT<sup className="text-gray-500">[1]</sup>, and the backbone is based on DiT<sup className="text-gray-500">[2]</sup>. We chose Transformers to ensure stable, predictable scaling, and fast inference on Etched&apos;s Transformer ASIC chip, Sohu.</p>

        <Image src="/arch_new.png" alt="Architecture" width={1000} height={500} />

        <p className="text-justify leading-relaxed">In contrast to bidirectional models such as Sora<sup className="text-gray-500">[3]</sup>, Oasis generates frames autoregressively, with the option for each frame to be conditioned on game input. This enables users to interact with the world in realtime. The model was trained using Diffusion Forcing<sup className="text-gray-500">[4]</sup>, which denoises with independent per-token noise levels, and allows for novel decoding schemes such as ours.</p>

        <p className="text-justify leading-relaxed">One issue we focused on is temporal stability, or making sure the model outputs make sense over long time horizons. In autoregressive models, errors compound, and small imperfections can quickly snowball into glitched frames. Solving this required innovations in long-context generation.</p>

        <p className="text-justify leading-relaxed">A strategy we found to greatly increase stability was dynamic noising, which adjusts noise at inference time on a schedule, injecting noise in the first diffusion forward passes to reduce error accumulation, but gradually removing noise in the later passes so the model can find and persist high-frequency details in previous frames for improved consistency. Since our model saw noise during training, it was able to successfully deal with noisy samples at inference.</p>

        <div className="flex justify-center items-center">
        <Image src="/dyno.png" alt="Dynamic Noising" width={700} height={500} />
        </div>

        <p className="text-justify leading-relaxed">To learn more about the engineering underlying this model, and some of the specific optimizations in training and inference, check out the <a className="underline" href="https://decart.ai/blog/training-the-world-model">Decart blog post</a>.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{
            loop: true
          }}>
            <CarouselContent>
              {["/5.webp", "/4.webp", "/1.webp", "/2.webp", "/3.webp"].map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/3">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0">
                      <Image
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        width={700}
                        height={300}
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
          
        <h2 className="text-2xl font-bold text-center mt-8">Performance</h2>

        <p className="text-justify leading-relaxed">Oasis can generate output in realtime, 24 frames every second. Current state-of-the-art text-to-video models with a similar DiT architecture (e.g. Sora<sup className="text-gray-500">[3]</sup>, Mochi-1<sup className="text-gray-500">[6]</sup> and Runway<sup className="text-gray-500">[7]</sup>) can take 10-20 seconds to create just one second of video, even on multiple GPUs. In order to match the experience of playing a game, however, our model must generate a new frame every 0.04 seconds, which is over 100x faster.</p>

        <section className="flex justify-center items-center my-4">
        <Image src="/speed.png" alt="Performance" width={500} height={500} />
        </section>

        <p className="text-justify leading-relaxed">With Decart&apos;s inference stack, the model was able to run at playable framerates, unlocking real-time interactivity for the first time. Read more about it on <a className="underline" href="https://decart.ai/blog/training-the-world-model">Decart&apos;s blog</a>.</p>

        <p className="text-justify leading-relaxed">However, to make the model an additional order of magnitude faster, and make it cost-efficient to run at scale, new hardware is needed. Oasis is optimized for Sohu, the Transformer ASIC built by Etched. On NVIDIA H100s today, the model can run at 720p at 20fps. Sohu can run the same model at up to 4K, which is 4x more tokens per second. </p>

        <p className="text-justify leading-relaxed">In addition, Oasis&apos; end-to-end Transformer architecture makes it extremely efficient on Sohu - at the same price and power consumption as an H100 GPU, Oasis on Sohu can serve 10x more users. We believe the price of serving models like Oasis is the hidden bottleneck to releasing generative video in production. See more performance figures and read more about Oasis and Sohu on <a className="underline" href="https://etched.ai/blog">Etched&apos;s blog</a>.</p>

        <section className="flex justify-center items-center my-4">
        <Image src="/sohu.png" alt="Performance" width={500} height={500} />
        </section>

        <h2 className="text-2xl font-bold text-center mt-8">Future Work</h2>

        <p className="text-justify leading-relaxed">Oasis is an impressive technical demo, but we believe this research will enable an exciting new generation of foundation models and consumer products. For example:</p>
        <ul className="list-disc list-inside">
          <li>Creating and editing game content on-the-fly, even while playing, through text and image prompting</li>
          <li>Generating content individually tailored for each user on social media</li>
          <li>Real-time medical care, able to respond on the fly to patients in a video call</li>
          <li>AI teachers, who can generate videos to respond to students in a classroom</li>
        </ul>
        <p className="text-justify leading-relaxed">Oasis is the first in a series of world generation models - we&apos;re scaling our dataset and architecture by 10x each, and we&apos;re excited to report our findings soon.</p>
        <p className="text-justify leading-relaxed">Etched and Decart are excited to build these models together. The integration of Oasis with our hardware and software, from architecture to production, will ensure this model family remains one of the fastest and best as we advance the frontier of world generation. If you&apos;re interested in collaborating, reach out to <a href="mailto:tal@decart.ai">tal@decart.ai</a></p>
      </div>

      


        </main>

        <div className="flex flex-col gap-4 p-8 sm:p-20 md:px-48 bg-secondary">
          <p className="text-justify text-sm text-secondary-foreground">[1]: <a className="underline" href="https://arxiv.org/abs/2010.11929">Dosovitskiy et al., An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[2]: <a className="underline" href="https://arxiv.org/abs/2212.09748">Peebles et al., Scalable Diffusion Models with Transformers</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[3]: <a className="underline" href="https://openai.com/index/video-generation-models-as-world-simulators/">OpenAI, Video generation models as world simulators</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[4]: <a className="underline" href="https://arxiv.org/abs/2407.01392">Chen et al., Diffusion Forcing: Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[5]: <a className="underline" href="https://arxiv.org/abs/2211.05102">Pope et al., Efficiently Scaling Transformer Inference</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[6]: <a className="underline" href="https://www.genmo.ai/blog">Genmo, Mochi 1: A new SOTA in open-source video generation models</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[7]: <a className="underline" href="https://runwayml.com/research/introducing-gen-3-alpha">Runway, Introducing Gen-3 Alpha: A New Frontier for Video Generation</a></p>
          <p className="text-justify text-sm text-secondary-foreground">* Estimated throughput figures - Sora reported, Mochi-1 from FAL.AI endpoint adjusted for parameter count, Runway from Gen-3 reported throughput</p>
          </div>

      <div className="flex flex-col gap-4 px-0 md:px-16 bg-black">
        <div className="flex flex-col gap-4 p-8 pb-20 gap-16 sm:p-20 md:px-48">
              <h2 className="text-2xl font-bold text-center text-white">Contributors</h2>
              <p className="text-white text-center">AI Team at Decart</p>
              <p className="text-white text-center">Etched: <a className="underline" href="">Julian Quevedo</a>, <a className="underline" href="">Quinn McIntyre</a>, <a className="underline" href="">Spruce Campbell</a>, <a className="underline" href="">Xinlei Chen</a>, <a className="underline" href="">Robert Wachen</a></p>
              
        </div>
        </div>

    

      
    </div>
  );
}
