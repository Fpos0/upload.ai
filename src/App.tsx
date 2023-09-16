import { Button } from "./components/ui/button";
import { Github, FileVideo, Upload, Wand2 } from 'lucide-react'
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
export function App() {

  // Stopped at Aula 1 - 58:18 adicionando icone
  // https://youtu.be/RMjBdQsG3Ko?t=3498
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>


        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Developed by Flavio FpoS | NLW Event by Rocketseat</span>

          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            Github
          </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Add the AI prompt here"
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="AI answer will go in here"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Lembre-se: você pode utilizar a variavel <code className="text-violet-400">{'{transcription}'}</code> no seu prompt para adicionar o conteudo da transcrição do video selecionado
          </p>
        </div>
        <aside className="w-80 space-y-6">
          <form className="space-y-6">
            <label
              htmlFor="video"
              className="border flex rounded-md aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
            >
              <FileVideo className="w-4 h-4" />
              Selecione um video
            </label>

            <input type="file" id="video" accept="video/mp4" className="sr-only" />

            <Separator />

            <div className="space-y-2">
              <Label htmlFor="transcription_prompt">Transcription Prompt</Label>
              <Textarea
                id="transcription_prompt"
                className="h-20 leading-relaxed resize-none"
                placeholder="Add the key words here splitted by comma (,)"
              />
            </div>

            <Button className="w-full" type="submit">
              Load video
              <Upload className="w-4 h-4 ml-2 " />
            </Button>
          </form> Inteligência

          <Separator />
          <form action="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select  >
                <SelectTrigger>
                  <SelectValue placeholder="Sele ct a prompt" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>prompt 1</SelectItem>
                  <SelectItem value='gpt3.5'>youtube description</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">To be unlocked </span>
            </div>


            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue='gpt3.5'>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='gpt3.5'>GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">To be unlocked </span>
            </div>
          </form>

          <Separator />


          <div className="space-y-4">
            <Label>Temperatura</Label>
            <Slider
              min={0}
              max={1}
              step={0.1}
            />
            <span className="block text-xs text-muted-foreground italic leading-relaxed">Higher values = change to more creative and have errors </span>
          </div>

          <Separator />

          <Button
            type="submit"
            className="w-full"
          >
            Execute
            <Wand2 className="w-4 h-4 ml-2" />
          </Button>

        </aside>
      </main>
    </div>
  )
}

