-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- HelloHire Database Schema
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

-- EMPLOYERS
create table if not exists employers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  company_name text not null,
  industry text,
  country text,
  website text,
  contact_name text,
  contact_email text,
  contact_phone text,
  company_size text,
  created_at timestamptz default now()
);

-- ROLE REQUESTS
create table if not exists role_requests (
  id uuid primary key default gen_random_uuid(),
  employer_id uuid references employers(id) on delete cascade,
  role_title text not null,
  role_type text check (role_type in ('full-time','part-time','contract','fractional')),
  skills_required text[],
  experience_level text check (experience_level in ('junior','mid','senior','lead','executive')),
  salary_budget_usd_month int,
  start_date date,
  description text,
  status text default 'open' check (status in ('open','in-progress','filled','closed')),
  created_at timestamptz default now()
);

-- TALENT PROFILES
create table if not exists talent_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  full_name text not null,
  email text not null,
  phone text,
  city text,
  province text,
  linkedin_url text,
  portfolio_url text,
  headline text,
  bio text,
  skills text[],
  years_experience int,
  availability text check (availability in ('immediate','2-weeks','1-month','3-months')),
  preferred_role_type text[],
  preferred_salary_usd_month int,
  resume_url text,
  avatar_url text,
  is_featured boolean default false,
  is_available boolean default true,
  created_at timestamptz default now()
);

-- PLACEMENTS
create table if not exists placements (
  id uuid primary key default gen_random_uuid(),
  role_request_id uuid references role_requests(id),
  talent_id uuid references talent_profiles(id),
  employer_id uuid references employers(id),
  placement_date date,
  salary_agreed_usd_month int,
  role_title text,
  testimonial text,
  is_public boolean default false,
  created_at timestamptz default now()
);

-- CONTACT INQUIRIES
create table if not exists contact_inquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  inquiry_type text check (inquiry_type in ('employer','talent','media','partnership','other')),
  message text not null,
  status text default 'new' check (status in ('new','in-review','responded','closed')),
  created_at timestamptz default now()
);

-- WAITLIST
create table if not exists waitlist (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null unique,
  role_interest text,
  source text,
  created_at timestamptz default now()
);

-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
-- ROW LEVEL SECURITY
-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

alter table employers enable row level security;
alter table role_requests enable row level security;
alter table talent_profiles enable row level security;
alter table placements enable row level security;
alter table contact_inquiries enable row level security;
alter table waitlist enable row level security;

-- Employers can only see their own records
create policy "Employers: own rows" on employers
  for all using (auth.uid() = user_id);

-- Talent can only see their own profile
create policy "Talent: own rows" on talent_profiles
  for all using (auth.uid() = user_id);

-- Contact inquiries: insert only for anon
create policy "Contact: anon insert" on contact_inquiries
  for insert with check (true);

-- Waitlist: anon insert only
create policy "Waitlist: anon insert" on waitlist
  for insert with check (true);

-- Role requests: employers can manage their own
create policy "Role requests: own rows" on role_requests
  for all using (
    employer_id in (
      select id from employers where user_id = auth.uid()
    )
  );

-- Placements: viewable by related employer
create policy "Placements: employer view" on placements
  for select using (
    employer_id in (
      select id from employers where user_id = auth.uid()
    )
  );
