"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon, ArrowTopRightIcon, CopyIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{src: string, caption?: string} | null>(null);

  const openImageModal = (src: string, caption?: string) => {
    setSelectedImage({ src, caption });
    setIsModalOpen(true);
  };

  return (
    <div className="">
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="">
          {selectedImage && (
            <div className="flex flex-col items-center gap-4 p-6">
              <Image
                src={selectedImage.src}
                alt={selectedImage.caption || "Preview"}
                width={500}
                height={500}
                className="object-cover"
              />
              {selectedImage.caption && (
                <p className="text-center">{selectedImage.caption}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>

      <main className="flex flex-col gap-8 p-8 pb-20 gap-16 sm:p-20 md:px-48">
        <div className="flex flex-col items-center gap-8">
        <h3>October 31, 2024</h3>
        <h1 className="text-5xl font-bold text-center">Oasis: A Universe in a Transformer</h1>
        <h2 className="mt-[-20px] text-center mb-8"><a className="underline" href="https://decart.ai">Decart</a>, <a className="underline" href="https://etched.com">Etched</a></h2>
        <video src="/wide1.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />

        <div className="flex flex-col items-center justify-center gap-4 w-full md:w-1/2">
        <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-14 sm:h-16 px-4 sm:px-5 w-56"
            href="https://oasis.decart.ai/welcome"
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
            href="https://www.decart.ai/articles/oasis-interactive-ai-video-game-model"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowTopRightIcon className="w-4 h-4" />
            Decart Blog
          </a>
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/etched-ai/open-oasis"
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
            href="https://huggingface.co/Etched/oasis-500m"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/hf-logo.svg"
              alt="HuggingFace"
              width={20}
              height={20}
            />
            Model weights
          </a>
          <a
            className="rounded-full border border-solid border-foreground transition-colors flex items-center justify-center gap-2 hover:bg-[#ccc] dark:hover:bg-[#383838] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://etched.com/blog-posts/oasis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowTopRightIcon className="w-4 h-4" />
            Etched Blog
          </a>
        </div>
        </div>
        <div className="flex flex-col gap-4 px-0 lg:px-32">
        <p className="text-justify leading-relaxed">We&apos;re excited to announce Oasis, the first playable, realtime, open-world AI model. It&apos;s a video game, but entirely generated by AI. Oasis is the first step in our research towards more complex interactive worlds. </p>

        <p className="text-justify leading-relaxed">Oasis takes in user keyboard input and generates real-time gameplay, including physics, game rules, and graphics. You can move around, jump, pick up items, break blocks, and more. There is no game engine; just a foundation model.</p>

        <p className="text-justify leading-relaxed">We believe fast transformer inference is the missing link to making generative video a reality. Using Decart&apos;s inference engine, we show that real-time video is possible. When Etched&apos;s transformer ASIC, Sohu, is released, we can run models like Oasis in 4K. Today, we&apos;re releasing Oasis&apos;s code, the weights of a 500M parameter model you can run locally, and a live playable demo of a larger checkpoint.</p>

        <h2 className="text-2xl font-bold text-center mt-8">Gameplay Results</h2>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {["/1.webp", "/2.webp", "/3.webp", "/4.webp", "/5.webp"].map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 cursor-pointer" onClick={() => openImageModal(src)}>
                      <Image
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        width={700}
                        height={300}
                        className="object-cover hover:opacity-90 transition-opacity"
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

        <p className="text-justify leading-relaxed">Oasis understands complex game mechanics, such as building, lighting physics, inventory management, object understanding, and more.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {[
                {src: "/placing_4_fences.webp", caption: "Placing non-cube blocks"},
                {src: "/torch_becomes_dark.webp", caption: "Model understands lighting physics"},
                {src: "/pig_mines.webp", caption: "Interacting with animals"},
                {src: "/health_up_eating.webp", caption: "Recovering health when eating"},
                {src: "/shovel_is_faster.webp", caption: "Shovel is faster than hands"}
              ].map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div 
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => openImageModal(item.src, item.caption)}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={700}
                      height={300}
                      className="object-cover hover:opacity-90 transition-opacity"
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

        <p className="text-justify leading-relaxed">Oasis outputs a diverse range of settings, locations, and objects. This versatility gives us confidence that Oasis can be adapted to generate a wide range of new maps, games, features, and modifications with limited additional training.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {[
                {src: "/spacelike_dark_location.webp", caption: "Space-like dark location"},
                {src: "/night_time.webp", caption: "Oasis renders at night"},
                {src: "/placing_objects.webp", caption: "Placing a range of objects"},
                {src: "/opening_chest.webp", caption: "Oasis lets users open inventory chests"},
                {src: "/wandering_trader.webp", caption: "Exciting animals and NPCs"}
              ].map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div 
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => openImageModal(item.src, item.caption)}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={700}
                      height={300}
                      className="object-cover hover:opacity-90 transition-opacity"
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

        <p className="text-justify leading-relaxed">Oasis is an impressive technical demo, but we believe this research will enable an exciting new generation of foundation models and consumer products. For example, rather than being controlled by actions, a game controlled completely by text, audio, or other modalities.</p>
          
        <h2 className="text-2xl font-bold text-center mt-8">Architecture</h2>

        <p className="text-justify leading-relaxed">The model is composed of two parts: a spatial autoencoder, and a latent diffusion backbone. Both are Transformer-based: the autoencoder is based on ViT<sup className="text-gray-500">[1]</sup>, and the backbone is based on DiT<sup className="text-gray-500">[2]</sup>. Contrasting from recent action-conditioned world models such as GameNGen<sup className="text-gray-500">[3]</sup> and DIAMOND<sup className="text-gray-500">[4]</sup>, we chose Transformers to ensure stable, predictable scaling, and fast inference on Etched&apos;s Transformer ASIC, Sohu.</p>

        <Image src="/arch_new.png" alt="Architecture" width={1000} height={500} />

        <p className="text-justify leading-relaxed">In contrast to bidirectional models such as Sora<sup className="text-gray-500">[5]</sup>, Oasis generates frames autoregressively, with the ability to condition each frame on game input. This enables users to interact with the world in real-time. The model was trained using Diffusion Forcing<sup className="text-gray-500">[6]</sup>, which denoises with independent per-token noise levels, and allows for novel decoding schemes such as ours. We train on a subset of open-source Minecraft video data collected by OpenAI<sup className="text-gray-500">[9]</sup>.</p>

        <p className="text-justify leading-relaxed">One issue we focused on is temporal stability--making sure the model outputs make sense over long time horizons. In autoregressive models, errors compound, and small imperfections can quickly snowball into glitched frames. Solving this required innovations in long-context generation.</p>

        <p className="text-justify leading-relaxed">We solved this by deploying dynamic noising, which adjusts inference-time noise on a schedule, injecting noise in the first diffusion forward passes to reduce error accumulation, and gradually removing noise in the later passes so the model can find and persist high-frequency details in previous frames for improved consistency. Since our model saw noise during training, it learned to successfully deal with noisy samples at inference.</p>

        <div className="flex justify-center items-center">
        <Image src="/dyno.png" alt="Dynamic Noising" width={700} height={500} />
        </div>

        <p className="text-justify leading-relaxed">To learn more about the engineering underlying this model, and some of the specific optimizations in training and inference, check out the <a className="underline" href="https://www.decart.ai/articles/oasis-interactive-ai-video-game-model">Decart blog post</a>.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {["/strange_falling.webp", "/weird_hill_mine.webp", "/underwater.webp", "/falling_mine.webp", "/water_mine.webp"].map((src, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <Card>
                    <CardContent className="flex items-center justify-center p-0 cursor-pointer" onClick={() => openImageModal(src)}>
                      <Image
                        src={src}
                        alt={`Carousel image ${index + 1}`}
                        width={700}
                        height={300}
                        className="object-cover hover:opacity-90 transition-opacity"
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

        <p className="text-justify leading-relaxed">Oasis generates real-time output in 20 frames per second. Current state-of-the-art text-to-video models with a similar DiT architecture (e.g. Sora<sup className="text-gray-500">[5]</sup>, Mochi-1<sup className="text-gray-500">[7]</sup> and Runway<sup className="text-gray-500">[8]</sup>) can take 10-20 seconds to create just one second of video, even on multiple GPUs. In order to match the experience of playing a game, however, our model must generate a new frame every 0.04 seconds, which is over 100x faster.</p>

        <section className="flex justify-center items-center my-4">
        <Image src="/speed.png" alt="Performance" width={500} height={500} />
        </section>

        <p className="text-justify leading-relaxed">With Decart&apos;s inference stack, the model runs at playable framerates, unlocking real-time interactivity for the first time. Read more about it on <a className="underline" href="https://www.decart.ai/articles/oasis-interactive-ai-video-game-model">Decart&apos;s blog</a>.</p>

        <p className="text-justify leading-relaxed">However, to make the model an additional order of magnitude faster, and make it cost-efficient to run at scale, new hardware is needed. Oasis is optimized for Sohu, the Transformer ASIC built by Etched. Sohu can scale to massive 100B+ next-generation models in 4K resolution.</p>

        <p className="text-justify leading-relaxed">In addition, Oasis&apos; end-to-end Transformer architecture makes it extremely efficient on Sohu, which can serve &gt;10x more users even on 100B+ parameter models. We believe the price of serving models like Oasis is the hidden bottleneck to releasing generative video in production. See more performance figures and read more about Oasis and Sohu on <a className="underline" href="https://etched.ai/blog">Etched&apos;s blog</a>.</p>

        <section className="flex justify-center items-center my-4">
        <Image src="/users.png" alt="Performance" width={500} height={500} />
        </section>

        <h2 className="text-2xl font-bold text-center mt-8">Future Explorations</h2>

        <p className="text-justify leading-relaxed"> With the many exciting results, there come areas for future development in the model. There are difficulties with the sometimes fuzzy video in the distance, the temporal consistency of uncertain objects, domain generalization, precise control over inventories, and difficulties over long contexts.</p>

        <div className="relative w-screen left-1/2 right-1/2 -mx-[50vw] my-4">
          <Carousel className="w-full" opts={{ loop: true }}>
            <CarouselContent>
              {[
                {src: "/colloseum.webp", caption: "Struggles with domain generalization"},
                {src: "/3_second_memory.webp", caption: "Limited memory over long horizons"},
                {src: "/inventory_and_changing_hands.webp", caption: "Difficulty with precise inventory control"},
                {src: "/block_becomes_fence.webp", caption: "Difficulty with precise object control"},
                {src: "/3.webp", caption: "Fuzziness of distant sand"}
              ].map((item, index) => (
                <CarouselItem key={index} className="basis-1/2 md:basis-1/4">
                  <div 
                    className="flex flex-col items-center justify-center cursor-pointer"
                    onClick={() => openImageModal(item.src, item.caption)}
                  >
                    <Image
                      src={item.src}
                      alt={item.caption}
                      width={700}
                      height={300}
                      className="object-cover hover:opacity-90 transition-opacity"
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

        <p className="text-justify leading-relaxed">Following an in-depth sensitivity analysis on different configurations of the architecture alongside the data and model size, we hypothesize that the majority of these aspects may be addressed through scaling of the model and the datasets. Therefore, we are currently developing this direction alongside additional optimization techniques in order to enable such large-scale training efficiently. Further, once these larger models are developed, new breakthroughs in inferencing technology would be required in order to ensure a sustainable latency and cost trade-off. If you&apos;re interested in collaborating, reach out to <a href="mailto:contact@decart.ai" className="underline text-blue-500">contact@decart.ai</a> and <a href="mailto:contact@etched.com" className="underline text-blue-500">contact@etched.com</a>.</p>
        

        {/* <p className="text-justify leading-relaxed">Oasis is an impressive technical demo, but we believe this research will enable an exciting new generation of foundation models and consumer products. For example:</p>
        <ul className="list-disc list-inside">
          <li>Creating and editing game content on-the-fly, even while playing, through text and image prompting</li>
          <li>Generating content individually tailored for each user on social media</li>
          <li>Real-time medical care, able to respond on the fly to patients in a video call</li>
          <li>AI teachers, who can generate videos to respond to students in a classroom</li>
        </ul> */}

      </div>

      


        </main>
       

        <div className="flex flex-col gap-4 p-8 sm:p-20 md:px-48 bg-secondary">
          <p className="text-justify text-sm text-secondary-foreground">[1]: <a className="underline" href="https://arxiv.org/abs/2010.11929">Dosovitskiy et al., An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[2]: <a className="underline" href="https://arxiv.org/abs/2212.09748">Peebles et al., Scalable Diffusion Models with Transformers</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[3]: <a className="underline" href="https://arxiv.org/abs/2408.14837">Valevski et al., Diffusion Models Are Real-Time Game Engines</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[4]: <a className="underline" href="https://arxiv.org/abs/2405.12399">Alonso et al., Diffusion for World Modeling: Visual Details Matter in Atari</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[5]: <a className="underline" href="https://openai.com/index/video-generation-models-as-world-simulators/">OpenAI, Video generation models as world simulators</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[6]: <a className="underline" href="https://arxiv.org/abs/2407.01392">Chen et al., Diffusion Forcing: Diffusion Forcing: Next-token Prediction Meets Full-Sequence Diffusion</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[7]: <a className="underline" href="https://www.genmo.ai/blog">Genmo, Mochi 1: A new SOTA in open-source video generation models</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[8]: <a className="underline" href="https://runwayml.com/research/introducing-gen-3-alpha">Runway, Introducing Gen-3 Alpha: A New Frontier for Video Generation</a></p>
          <p className="text-justify text-sm text-secondary-foreground">[9]: <a className="underline" href="https://arxiv.org/abs/2206.11795">Video PreTraining (VPT): Learning to Act by Watching Unlabeled Online Videos</a></p>
          <p className="text-justify text-sm text-secondary-foreground">* Estimated throughput figures - Sora reported, Mochi-1 from FAL.AI endpoint adjusted for parameter count, Runway from Gen-3 reported throughput</p>
          </div>

          <div className="flex flex-col gap-4 p-12 md:px-64 bg-secondary my-4 relative group">
          <h2 className="text-2xl font-bold text-center">BibTeX</h2>
          <p className="text-center">If you&apos;d like to reference Oasis in your work, please cite it as:</p>
          <div className="relative">
            <p className="text-left text-sm font-mono p-4 bg-background whitespace-pre overflow-clip text-wrap">
              {"@article{oasis2024,"}
              <br />
              {"  author    = {Decart and Julian Quevedo, Quinn McIntyre, Spruce Campbell, Xinlei Chen, Robert Wachen},"}
              <br />
              {"  title     = {Oasis: A Universe in a Transformer},"}
              <br />
              {"  year      = {2024},"}
              <br />
              {"  url       = {https://oasis-model.github.io/}"}
              <br />
              {"}"}
            </p>
            <button 
              className="absolute top-2 right-2 p-1 bg-background text-white hover:bg-gray-600 transition-colors group-hover:opacity-100"
              onClick={() => navigator.clipboard.writeText(`@article{oasis2024,
  author    = {Decart and Julian Quevedo, Quinn McIntyre, Spruce Campbell, Robert Wachen},
  title     = {Oasis: A Universe in a Transformer},
  year      = {2024},
  url       = {https://oasis-model.github.io/}
}`)}
            >
              <CopyIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

      <div className="flex flex-col gap-4 px-0 md:px-16 bg-black">
        <div className="flex flex-col gap-4 p-8 pb-20 gap-16 sm:p-20 md:px-48">
              <h2 className="text-2xl font-bold text-center text-white">Contributors</h2>
              <p className="text-white text-center"><a className="underline" href="http://decart.ai/">AI Team at Decart</a></p>
              <p className="text-white text-center"><a className="underline" href="https://www.etched.com/">Etched</a>: <a className="underline" href="https://julian-q.github.io/">Julian Quevedo</a>, <a className="underline" href="https://www.linkedin.com/in/quinn-mcintyre/">Quinn McIntyre</a>, <a className="underline" href="https://www.linkedin.com/in/spruce-campbell-5a13061a6/">Spruce Campbell</a>, <a className="underline" href="https://www.linkedin.com/in/robertwachen/">Robert Wachen</a></p>
              <p className="text-white text-center">Thanks to: <a className="underline" href="https://xinleic.xyz/">Xinlei Chen</a></p>
    
        </div>
        </div>

    

      
    </div>
  );
}
