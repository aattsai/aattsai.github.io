class Country
  def initialize (name, population)
    @name = name
    @population = population
  end

  def official_name
    return "Republic of #{@name}"
  end

  def population
    return "Total Population of #{official_name} is #{@population}"
  end
end





