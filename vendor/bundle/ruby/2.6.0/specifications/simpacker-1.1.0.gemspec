# -*- encoding: utf-8 -*-
# stub: simpacker 1.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "simpacker".freeze
  s.version = "1.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Kazuhito Hokamura".freeze]
  s.bindir = "exe".freeze
  s.date = "2019-07-03"
  s.description = "Integrate modern JavaScript build system with Rails.".freeze
  s.email = ["k.hokamura@gmail.com".freeze]
  s.homepage = "https://github.com/hokaccha/simpacker".freeze
  s.licenses = ["MIT".freeze]
  s.rubygems_version = "3.0.3".freeze
  s.summary = "Integrate modern JavaScript build system with Rails.".freeze

  s.installed_by_version = "3.0.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>.freeze, [">= 4.2"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.16"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_development_dependency(%q<rails>.freeze, ["~> 5.2"])
      s.add_development_dependency(%q<minitest>.freeze, ["~> 5.1"])
    else
      s.add_dependency(%q<railties>.freeze, [">= 4.2"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.16"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
      s.add_dependency(%q<rails>.freeze, ["~> 5.2"])
      s.add_dependency(%q<minitest>.freeze, ["~> 5.1"])
    end
  else
    s.add_dependency(%q<railties>.freeze, [">= 4.2"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.16"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    s.add_dependency(%q<rails>.freeze, ["~> 5.2"])
    s.add_dependency(%q<minitest>.freeze, ["~> 5.1"])
  end
end
