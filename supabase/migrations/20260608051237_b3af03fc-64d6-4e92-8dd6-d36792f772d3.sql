CREATE TABLE public.blessings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  relationship TEXT,
  blessing TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.blessings TO anon;
GRANT SELECT, INSERT ON public.blessings TO authenticated;
GRANT ALL ON public.blessings TO service_role;
ALTER TABLE public.blessings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit blessings" ON public.blessings FOR INSERT TO anon, authenticated WITH CHECK (length(name) BETWEEN 1 AND 100 AND length(blessing) BETWEEN 1 AND 1000 AND (relationship IS NULL OR length(relationship) <= 100));
CREATE POLICY "Anyone can read blessings" ON public.blessings FOR SELECT TO anon, authenticated USING (true);