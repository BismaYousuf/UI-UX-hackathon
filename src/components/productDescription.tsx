"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductDescription() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-[1320px]">
      <Tabs defaultValue="description" className="w-full">
        <TabsList className="h-[50px]">
          <TabsTrigger 
            value="description" 
            className="px-6 data-[state=active]:bg-[#FF9F0D] data-[state=active]:text-white"
          >
            Description
          </TabsTrigger>
          <TabsTrigger 
            value="reviews"
            className="px-6"
          >
            Reviews (24)
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="mt-8 space-y-8">
          <div className="space-y-6">
            <p className="text-gray-500 leading-relaxed">
              Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg text-gray-600">Key Benefits</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Maecenas ullamcorper est et massa mattis condimentum.
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Etiam nec massa et lectus faucibus ornare congue in nunc.
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                Mauris eget diam magna, in blandit turpis.
              </li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <div className="mt-8">
            {/* Reviews content can be added here */}
            <p className="text-gray-500">Reviews content coming soon...</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

