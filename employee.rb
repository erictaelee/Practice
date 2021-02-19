class Employee
  attr_reader :first_name, :last_name, :salary, :active, :email
  attr_writer :first_name, :last_name, :salary, :active, :email

  def initialize(input_options)
    @first_name = input_options[:first_name]
    @last_name = input_options[:last_name]
    @salary = input_options[:salary]
    @active = input_options[:active]
    @email = input_options[:email]
  end

  def print_info
    puts "#{@first_name} #{@last_name} makes #{@salary} a year."
  end

  def full_name
    if @last_name.end_with? "s"
      puts "#{@first_name} #{@last_name}, Esquire"
    else
      puts "#{@first_name} #{@last_name}"  
    end  
  end  

  def email
    puts "#{@first_name}#{@last_name}@gmail.com"  
  end  


  def give_annual_raise
    @salary = 1.05 * @salary
  end
end

employee1 = Employee.new({first_name: "Majora", last_name: "Carter", salary: 80000, active: true})
employee2 = Employee.new(first_name: "Danilo", last_name: "Campos", salary: 70000, active: true)
employee1.print_info
employee2.print_info

employee1.full_name
employee2.full_name
employee1.email

